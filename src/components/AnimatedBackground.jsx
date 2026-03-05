import { useRef, useEffect } from "react";

const HEART_OPACITY = 0.3; // 0–1, lower = more subtle
const SPEED_FACTOR = 0.35; // 1 = normal, 0.5 = 50% slower

/**
 * Animated canvas background (hearts + pink gradient) behind all content.
 */
export function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    class Tool {
      static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      static randomColorRGB() {
        return (
          "rgb(" +
          this.randomNumber(0, 255) +
          ", " +
          this.randomNumber(0, 255) +
          ", " +
          this.randomNumber(0, 255) +
          ")"
        );
      }
      static randomColorHSL(saturation, lightness) {
        return (
          "hsl(" +
          this.randomNumber(0, 360) +
          ", " +
          saturation +
          "%, " +
          lightness +
          "%)"
        );
      }
    }

    class Angle {
      constructor(a) {
        this.a = a;
        this.rad = (this.a * Math.PI) / 180;
      }
      incDec(num) {
        this.a += num;
        this.rad = (this.a * Math.PI) / 180;
      }
    }

    class Canvas {
      constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.mouseX = null;
        this.mouseY = null;
        this.heartNum = 100;
        this.hearts = [];
        if (this.width < 768) {
          this.heartNum = 50;
        } else {
          this.heartNum = 100;
        }
      }

      init() {
        for (let i = 0; i < this.heartNum; i++) {
          const s = new Heart(
            this,
            this.ctx,
            Tool.randomNumber(0, this.width),
            Tool.randomNumber(this.height - this.height / 2, this.height),
            Tool.randomNumber(10, 80)
          );
          this.hearts.push(s);
        }
      }

      render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.hearts.length; i++) {
          this.hearts[i].render(i);
        }
      }

      resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        if (this.width < 768) {
          this.heartNum = 50;
        } else {
          this.heartNum = 100;
        }
      }
    }

    class Heart {
      constructor(canvasInstance, ctx, x, y, r) {
        this.canvasInstance = canvasInstance;
        this.ctx = ctx;
        this.init(x, y, r);
      }

      init(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r * 0.8;
        this.maxR = r;
        this.c = "white";
        this.ga = Math.random();
        this.l = Tool.randomNumber(50, 500);
        this.sl = this.l;
        this.v = {
          r: 0,
          x: Tool.randomNumber(-1, 1) * Math.random() * SPEED_FACTOR,
          y: -Math.random() * SPEED_FACTOR,
        };
      }

      draw() {
        const ctx = this.ctx;
        ctx.save();
        ctx.globalAlpha = this.ga * HEART_OPACITY;
        ctx.fillStyle = this.c;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.r);
        ctx.bezierCurveTo(
          this.x - this.r - this.r / 5,
          this.y + this.r / 1.5,
          this.x - this.r,
          this.y - this.r,
          this.x,
          this.y - this.r / 3
        );
        ctx.bezierCurveTo(
          this.x + this.r,
          this.y - this.r,
          this.x + this.r + this.r / 5,
          this.y + this.r / 1.5,
          this.x,
          this.y + this.r
        );
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      stretch() {
        this.v.r += (this.maxR - this.r) * 0.1 * SPEED_FACTOR;
        this.v.r *= 0.9;
        this.r += this.v.r;
        if (this.l < 0) {
          this.l = Tool.randomNumber(50, 200);
          const c = this.canvasInstance;
          this.init(
            Tool.randomNumber(0, c.width),
            Tool.randomNumber(c.height - c.height / 2, c.height),
            Tool.randomNumber(10, 80)
          );
        }
      }

      updatePosition() {
        this.v.y -= 0.001 * SPEED_FACTOR;
        this.y += this.v.y;
        this.x += this.v.x;
      }

      updateParams() {
        const ratio = this.l / this.sl / 2;
        this.ga = ratio;
        this.l -= 1 * SPEED_FACTOR;
      }

      render() {
        this.updatePosition();
        this.updateParams();
        this.stretch();
        this.draw();
      }
    }

    const heartCanvas = new Canvas(canvasEl);
    heartCanvas.init();

    let animationId;
    function renderLoop() {
      heartCanvas.render();
      animationId = requestAnimationFrame(renderLoop);
    }
    renderLoop();

    const handleResize = () => {
      heartCanvas.resize();
      heartCanvas.hearts = [];
      heartCanvas.init();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="animated-bg-canvas block w-full h-full"
      />
    </div>
  );
}

import { Download } from "lucide-react";

export const AnimatedBorderButton = ({ children }) => {
  return (
    <button
      type="button"
      className="animated-border-btn group relative inline-flex items-center justify-center gap-2 rounded-[30px] border-0 px-6 py-3 font-medium focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-w-[200px] min-h-[60px]"
    >
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none rounded-[30px]"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 A 29,29 0 0 0 170,1 L 30,1"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};
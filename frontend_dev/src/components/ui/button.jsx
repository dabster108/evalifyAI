import { cn } from "../../lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default: "bg-slate-900 text-white hover:-translate-y-0.5 hover:shadow-lg",
  gradient:
    "bg-gradient-to-r from-violet-600 via-indigo-500 to-teal-500 text-white shadow-[0_12px_30px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(99,102,241,0.4)]",
  outline:
    "border border-slate-200/80 bg-white/70 text-slate-700 hover:border-slate-300 hover:text-slate-900",
  ghost: "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900",
};

const sizes = {
  sm: "h-8 px-3",
  md: "h-10 px-5",
  lg: "h-12 px-6 text-base",
};

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}) {
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

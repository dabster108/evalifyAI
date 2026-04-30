import { cn } from "../../lib/utils";

const variants = {
  subtle: "bg-slate-100/80 text-slate-700",
  info: "bg-violet-100/80 text-violet-700",
  success: "bg-emerald-100/80 text-emerald-700",
  warning: "bg-amber-100/80 text-amber-700",
  teal: "bg-teal-100/80 text-teal-700",
  indigo: "bg-indigo-100/80 text-indigo-700",
};

export function Badge({ className, variant = "subtle", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

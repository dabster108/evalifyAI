import { cn } from "../../lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/60 bg-white/70 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("p-6 pb-0", className)} {...props} />;
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("text-lg font-semibold text-slate-900", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }) {
  return <p className={cn("text-sm text-slate-500", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-6", className)} {...props} />;
}

import { cn } from "../../lib/utils";

export function Avatar({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className, ...props }) {
  return (
    <img
      className={cn("h-full w-full rounded-full object-cover", className)}
      {...props}
    />
  );
}

export function AvatarFallback({ className, ...props }) {
  return (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center text-sm font-semibold",
        className,
      )}
      {...props}
    />
  );
}

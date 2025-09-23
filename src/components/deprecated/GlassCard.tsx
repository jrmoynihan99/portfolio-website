import { ReactNode } from "react";
import clsx from "clsx";

export default function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={clsx("glass hover-lift", className)}>{children}</div>;
}

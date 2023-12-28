import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";
import Balancer from "react-wrap-balancer";

export interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const TypographyH1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",
          className
        )}
        ref={ref}
        {...props}
      >
        <Balancer>{children}</Balancer>
      </h1>
    );
  }
);

TypographyH1.displayName = "TypographyH1";

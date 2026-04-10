import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "gradient-purple text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 rounded-full",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-full",
        outline:
          "border-2 border-primary bg-transparent text-primary shadow-sm hover:bg-primary hover:text-primary-foreground rounded-full",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "gradient-purple text-primary-foreground shadow-lg hover:shadow-2xl hover:scale-105 rounded-full text-base tracking-wide",
        "hero-outline": "border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 rounded-full text-base tracking-wide",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

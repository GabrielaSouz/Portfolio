
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex items-center justify-center gap-3 whitespace-nowrap border border-transparent text-sm font-medium transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-gray-800",

        primary:
          "bg-[#9F8FCD] text-white hover:bg-[#8D7BBE]",

        primaryLight:
          "bg-[#DCD4EC] text-[#30264A] hover:bg-[#CFC4E4]",

        primaryDark:
          "bg-[#7663A5] text-white hover:bg-[#66538F]",

        outline:
          "border border-border bg-background text-foreground hover:bg-muted",

        outlineBlack:
          "border-2 border-black bg-white text-black hover:bg-gray-200",

        outlinePrimary:
          "border-2 border-[#9F8FCD] bg-white text-[#7663A5] hover:bg-[#F3EFFA]",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        ghost:
          "bg-transparent text-foreground hover:bg-muted",

        destructive:
          "bg-destructive text-white hover:bg-destructive/90",

        link:
          "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "px-8 py-4",
        xs: "px-3 py-2 text-xs gap-2",
        sm: "px-4 py-3 text-sm gap-2",
        lg: "px-10 py-5 text-base",
        xl: "px-10 py-6 text-base",
        icon: "size-10 p-0",
        "icon-xs": "size-6 p-0",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-12 p-0",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }

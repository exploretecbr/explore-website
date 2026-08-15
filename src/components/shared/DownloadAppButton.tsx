import { Smartphone } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DownloadAppButtonProps extends Omit<ButtonProps, "children" | "iconLeft"> {
  iconClassName?: string
}

/**
 * "Baixe o app" button — disabled while the app isn't publicly available yet.
 * Keeps the original button width/shape and signals "coming soon" via a small
 * corner badge plus a native tooltip / accessible label, instead of inline
 * text that would stretch the button.
 */
export function DownloadAppButton({
  className,
  iconClassName = "w-[18px] h-[18px]",
  size,
  variant = "primary",
  ...props
}: DownloadAppButtonProps) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <Button
        variant={variant}
        size={size}
        iconLeft={<Smartphone className={iconClassName} />}
        disabled
        title="Em breve — o app ainda não está disponível"
        aria-label="Baixe o app — em breve"
        className="w-full disabled:opacity-60"
        {...props}
      >
        Baixe o app
      </Button>
      <span
        className="absolute -top-2 -right-2 rounded-full bg-ink text-white text-[9px] leading-none font-bold uppercase tracking-wider px-1.5 py-1 shadow-[var(--shadow-sm)] pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        Em breve
      </span>
    </span>
  )
}

import type { ReactNode } from "react"

export function ValidationError({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs text-rose-500 dark:text-rose-400">{children}</span>
  )
}

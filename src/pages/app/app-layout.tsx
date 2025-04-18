import type { ReactNode } from "react"

import { AppHeader } from "@/pages/app/app-header"

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <AppHeader />

      <div className="w-full max-w-6xl mx-auto px-6 my-10 lg:mt-16">
        {children}
      </div>
    </div>
  )
}

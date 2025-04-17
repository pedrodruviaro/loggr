import { Logo } from "@/components/logo"

export function SplashScreen() {
  return (
    <div className="px-6 grid place-items-center min-h-dvh">
      <div className="scale-200 animate-pulse duration-100">
        <Logo />
      </div>
    </div>
  )
}

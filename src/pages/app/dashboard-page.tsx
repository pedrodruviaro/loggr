import { Link } from "react-router-dom"
import { ThemeToggler } from "@/components/theme/theme-toggler"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardPage() {
  return (
    <div>
      <header className="py-3 border-b border-muted">
        <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/app" className="font-mono text-xl tracking-tight">
            logg.r
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggler />

            <Separator
              orientation="vertical"
              style={{ height: "1.5rem", marginInline: "1rem" }}
            />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <span className="text-sm">
                    Hello, <strong className="font-medium">John Doe</strong>
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="w-full max-w-6xl mx-auto px-6 my-10 lg:mt-16">main</main>
    </div>
  )
}

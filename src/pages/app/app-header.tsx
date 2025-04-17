import { Link } from "react-router-dom"
import { Logo } from "@/components/logo"
import { ThemeToggler } from "@/components/theme/theme-toggler"
import { LayoutDashboard, LogOut, User2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
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
import { Button } from "@/components/ui/button"

export function AppHeader() {
  return (
    <header className="py-3 border-b border-muted">
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/app">
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggler />
          <Separator
            orientation="vertical"
            style={{ height: "1.5rem", marginInline: ".5rem" }}
          />

          <Dialog>
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
                  <DropdownMenuItem>
                    <Link
                      className="flex items-center gap-2"
                      to="/app/dashboard"
                    >
                      <LayoutDashboard />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link className="flex items-center gap-2" to="/app/profile">
                      <User2 />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <DialogTrigger asChild>
                    <button className="flex items-center gap-2 w-full h-full">
                      <LogOut />
                      Log out
                    </button>
                  </DialogTrigger>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure you wanna logout?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <div className="flex gap-4">
                  <DialogClose asChild>
                    <Button size="sm" variant="ghost">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => console.log("logout!")}
                  >
                    Confirm
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}

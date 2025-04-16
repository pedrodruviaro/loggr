import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex w-full flex-col justify-center space-y-6 bg-muted p-8 md:w-1/2 md:p-12 lg:p-16">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Welcome back
          </h1>
          <p className="text-muted-foreground md:text-lg">
            Sign in to your account to continue where you left off. We're glad
            to see you again.
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-8 md:w-1/2">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button>
              <LogIn className="mr-2 h-4 w-4" />
              Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

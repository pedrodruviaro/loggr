import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Pencil } from "lucide-react"
import { AppLayout } from "@/pages/app/app-layout"
import { Link } from "react-router-dom"

export function DashboardPage() {
  return (
    <AppLayout>
      <main className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-6 lg:items-start">
        <div className="space-y-10">
          <section className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Total hours (month)</CardTitle>
                <CardDescription>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl">20h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Activities (month)</CardTitle>
                <CardDescription>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl">4</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label>Lorem</Label>
                <Input />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Lorem</Label>
                  <Input />
                </div>
                <div className="grid gap-2">
                  <Label>Lorem</Label>
                  <Input />
                </div>
              </div>

              <Button>Create</Button>
            </form>
          </section>

          <section className="border rounded-lg p-10 min-h-[400px]">
            <p className="text-3xl">table</p>
          </section>
        </div>

        <aside>
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="grid gap-2">
                  <p className="font-semibold">John Doe</p>
                  <p className="flex items-center gap-1 text-sm">
                    <MapPin className="size-3" />
                    <span>Porto Alegre, RS</span>
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid gap-1">
                <Badge variant="outline" className="mb-2">
                  Member since 20/20/20
                </Badge>
                <p>Lorem, ipsum.</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni, eius?
                </p>
              </div>
            </CardContent>

            <CardFooter>
              <Button size="sm" variant="outline" asChild>
                <Link to="/app/profile">
                  <Pencil className="size-3" />
                  Edit Profile
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </aside>
      </main>
    </AppLayout>
  )
}

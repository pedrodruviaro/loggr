import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { AppLayout } from "@/pages/app/app-layout"
import { DayPicker } from "@/components/ui/day-picker"
import { DashboardUserProfile } from "./dashboard-user-profile"

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
            <h1 className="text-2xl font-bold mb-6">Create new log</h1>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label>Name *</Label>
                <Input />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Time spent (h)*</Label>
                  <Input />
                </div>
                <div className="grid gap-2">
                  <Label>Log day *</Label>
                  <DayPicker />
                </div>
              </div>

              <Button>
                <Plus />
                Create
              </Button>
            </form>
          </section>

          <section>
            <h1 className="text-2xl font-bold mb-2">Logs this month</h1>
          </section>
        </div>

        <aside>
          <DashboardUserProfile />
        </aside>
      </main>
    </AppLayout>
  )
}

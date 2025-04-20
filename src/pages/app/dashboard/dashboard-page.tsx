import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AppLayout } from "@/pages/app/app-layout"
import { LogsFormCreate } from "@/pages/app/dashboard/logs-form-create"
import { LogsTable } from "@/pages/app/dashboard/logs-table"
import { UserProfile } from "@/pages/app/profile/user-profile"

import { LogsTableFilters } from "./logs-table-filter"

export function DashboardPage() {
  return (
    <AppLayout>
      <main className="space-y-10">
        <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-6 lg:items-start">
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
              <LogsFormCreate />
            </section>
          </div>

          <aside className="sticky top-2">
            <UserProfile />
          </aside>
        </div>

        <section>
          <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Logs this month</h1>
            <LogsTableFilters />
          </div>
          <LogsTable />
        </section>
      </main>
    </AppLayout>
  )
}

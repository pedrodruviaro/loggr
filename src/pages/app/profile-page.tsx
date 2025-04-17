import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AppLayout } from "@/pages/app/app-layout"
import { Save } from "lucide-react"

export function ProfilePage() {
  return (
    <AppLayout>
      <main className="space-y-10">
        <section>
          <h1 className="text-3xl font-bold mb-2">Update Your Profile</h1>
          <p className="text-muted-foreground ">
            Manage your account details and preferences.
          </p>
        </section>

        <section>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <fieldset className="grid gap-2">
                <Label>Name</Label>
                <Input disabled value="John Doe" />
                <span className="text-xs text-muted-foreground">
                  This is your public display name.
                </span>
              </fieldset>
              <fieldset className="grid gap-2">
                <Label>Email</Label>
                <Input disabled value="johndoe@email.com" />
                <span className="text-xs text-muted-foreground">
                  This is your public display name.
                </span>
              </fieldset>
            </div>

            <fieldset>
              <div className="grid gap-2">
                <Label>Bio</Label>
                <Textarea
                  className="h-32 resize-none"
                  placeholder="Tell us a little about you"
                />
              </div>
            </fieldset>

            <div className="grid gap-6 md:grid-cols-2">
              <fieldset className="grid gap-2">
                <Label>Location</Label>
                <Input placeholder="Your place" />
              </fieldset>
              <fieldset className="grid gap-2">
                <Label>Website</Label>
                <Input placeholder="www.yoursite.com" />
              </fieldset>
            </div>

            <Button>
              <Save />
              Save Profile
            </Button>
          </form>
        </section>
      </main>
    </AppLayout>
  )
}

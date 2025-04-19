import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Save } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { getProfile } from "@/api/profile/get-profile"
import { updateProfile } from "@/api/profile/update-profile"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { ValidationError } from "@/components/validation-error"
import { useAuth } from "@/hooks/use-auth"
import { AppLayout } from "@/pages/app/app-layout"

const profileFormSchema = z.object({
  bio: z.string().max(300).optional(),
  location: z.string().optional(),
  jobtitle: z.string().optional(),
  website: z.union([z.literal(""), z.string().url()]).optional(),
})

type ProfileFormInputs = z.infer<typeof profileFormSchema>

export function ProfilePage() {
  const { user } = useAuth()
  const queryClient = useQueryClient()

  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ["profile", user?.uid],
    staleTime: Infinity,
    queryFn: () => getProfile({ userId: user?.uid ?? "" }),
  })

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onSuccess(_, { bio, jobtitle, location, website }) {
      queryClient.setQueryData(["profile", user?.uid], {
        bio,
        jobtitle,
        location,
        website,
      })
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ProfileFormInputs>({
    resolver: zodResolver(profileFormSchema),
    values: {
      bio: profile?.bio ?? "",
      location: profile?.location ?? "",
      jobtitle: profile?.jobtitle ?? "",
      website: profile?.website ?? "",
    },
  })

  async function handleUpdateProfile(data: ProfileFormInputs) {
    try {
      await updateProfileFn({
        userId: user?.uid ?? "",
        bio: data.bio,
        jobtitle: data.jobtitle,
        location: data.location,
        website: data.website,
      })
      toast.success("Profile updated successfully!")
    }
    catch {
      toast.error("Something gone wrong...", {
        description: "Please try again",
      })
    }
  }

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
          <Card>
            <CardContent>
              {!isProfileLoading
                ? (
                    <form
                      className="space-y-6"
                      onSubmit={handleSubmit(handleUpdateProfile)}
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        <fieldset className="grid gap-2">
                          <Label>Name</Label>
                          <Input disabled value={user?.displayName ?? ""} />
                          <span className="text-xs text-muted-foreground">
                            This is your public name.
                          </span>
                        </fieldset>
                        <fieldset className="grid gap-2">
                          <Label>Email</Label>
                          <Input disabled value={user?.email ?? ""} />
                          <span className="text-xs text-muted-foreground">
                            This is your public email.
                          </span>
                        </fieldset>
                      </div>

                      <fieldset>
                        <div className="grid gap-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            className="h-32 resize-none"
                            placeholder="Tell us a little about you"
                            {...register("bio")}
                          />
                          {errors.bio && (
                            <ValidationError>{errors.bio.message}</ValidationError>
                          )}
                        </div>
                      </fieldset>

                      <div className="grid gap-6 md:grid-cols-2 md:items-start lg:grid-cols-3">
                        <fieldset className="grid gap-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            placeholder="Your place"
                            id="location"
                            {...register("location")}
                          />
                          {errors.location && (
                            <ValidationError>{errors.location.message}</ValidationError>
                          )}
                        </fieldset>
                        <fieldset className="grid gap-2">
                          <Label htmlFor="jobtitle">Jobtitle</Label>
                          <Input
                            placeholder="Software Enginner"
                            id="jobtitle"
                            {...register("jobtitle")}
                          />
                          {" "}
                          {errors.jobtitle && (
                            <ValidationError>{errors.jobtitle.message}</ValidationError>
                          )}
                        </fieldset>
                        <fieldset className="grid gap-2 md:col-span-2 lg:col-span-1">
                          <Label htmlFor="website">Website</Label>
                          <Input
                            placeholder="www.yoursite.com"
                            id="website"
                            {...register("website")}
                          />
                          {errors.website && (
                            <ValidationError>{errors.website.message}</ValidationError>
                          )}
                        </fieldset>
                      </div>

                      <Button type="submit" disabled={isSubmitting}>
                        <Save />
                        Save Profile
                      </Button>
                    </form>
                  )
                : (
                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <Skeleton className="w-full h-[82px]" />
                        <Skeleton className="w-full h-[82px]" />
                      </div>
                      <Skeleton className="w-full h-32" />
                      <div className="grid gap-6 md:grid-cols-2 md:items-start lg:grid-cols-3">
                        <Skeleton className="w-full h-[82px]" />
                        <Skeleton className="w-full h-[82px]" />
                        <Skeleton className="w-full h-[82px] md:col-span-2 lg:col-span-1" />
                      </div>
                      <Skeleton className="w-[122px] h-9" />
                    </div>
                  )}
            </CardContent>
          </Card>
        </section>
      </main>
    </AppLayout>
  )
}

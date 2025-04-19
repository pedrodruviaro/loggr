import { useQuery } from "@tanstack/react-query"
import { House, MapPin, Pencil } from "lucide-react"
import { Link } from "react-router-dom"

import { getProfile } from "@/api/profile/get-profile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useAuth } from "@/hooks/use-auth"

export function UserProfile() {
  const { user } = useAuth()

  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ["profile", user?.uid],
    queryFn: () => getProfile({ userId: user?.uid ?? "" }),
    staleTime: Infinity,
  })

  return (
    <>
      {!isProfileLoading
        ? (
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={user?.photoURL ?? ""} />
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>

                  <div className="grid gap-1">
                    <p className="font-semibold">{user?.displayName}</p>
                    {profile?.location && (
                      <p className="flex items-center gap-1 text-sm">
                        <MapPin className="size-3" />
                        <span>{profile?.location}</span>
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid gap-1">
                  <Badge variant="outline" className="mb-2">
                    Member since
                    {" "}
                    {new Date(
                      user?.metadata.creationTime ?? "",
                    ).toLocaleDateString()}
                  </Badge>
                  {profile?.jobtitle && (
                    <p className="text-sm font-medium">{profile?.jobtitle}</p>
                  )}
                  {profile?.bio && <p className="text-xs">{profile?.bio}</p>}
                  {profile?.website && (
                    <p className="mt-2 flex items-center gap-1">
                      <House className="size-3.5 text-muted-foreground" />
                      <a
                        href={profile?.website}
                        target="_blank"
                        rel="nofollow"
                        className="underline text-muted-foreground text-xs"
                      >
                        {profile?.website}
                      </a>
                    </p>
                  )}
                </div>
              </CardContent>

              <CardFooter>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/app/profile">
                    <Pencil className="size-3" />
                    {!profile
                      || !Object.entries(profile).find(entry => entry[1] !== "")
                      ? "Complete your profile"
                      : "Edit profile"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        : (
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <Skeleton className="w-20 h-20 rounded-full" />

                  <div className="grid gap-1">
                    <Skeleton className="w-32 h-5" />
                    <Skeleton className="w-40 h-5" />
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid gap-1">
                  <Skeleton className="w-36 h-5 mb-2" />
                  <Skeleton className="w-32 h-4" />
                  <Skeleton className="w-full h-20" />
                  <Skeleton className="w-36 h-3" />
                </div>
              </CardContent>

              <CardFooter>
                <Skeleton className="w-[110px] h-8" />
              </CardFooter>
            </Card>
          )}
    </>
  )
}

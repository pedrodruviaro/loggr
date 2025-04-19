import { zodResolver } from "@hookform/resolvers/zod"
import { Plus } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DayPicker } from "@/components/ui/day-picker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const logsFormCreateSchema = z.object({
  name: z.string(),
  timeSpent: z.string(),
  date: z.date(),
})

type LogsFormCreateInput = z.infer<typeof logsFormCreateSchema>

export function LogsFormCreate() {
  const { register, handleSubmit, control } = useForm<LogsFormCreateInput>({
    resolver: zodResolver(logsFormCreateSchema),
  })

  async function handleCreateLog(data: LogsFormCreateInput) {
    const formatedDate = new Date(data.date).toLocaleDateString()
    const obj = {
      ...data,
      date: formatedDate,
    }

    console.log(obj)
  }

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Create new log</h1>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(handleCreateLog)}>
          <div className="grid gap-2">
            <Label>Name *</Label>
            <Input {...register("name")} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label>Time spent (h)*</Label>
              <Input {...register("timeSpent")} />
            </div>
            <div className="grid gap-2">
              <Label>Log day *</Label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <DayPicker value={field.value} onChange={field.onChange} />
                )}
              />
            </div>
          </div>

          <Button>
            <Plus />
            Create
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

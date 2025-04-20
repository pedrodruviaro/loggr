import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { Plus } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import type { LogInput } from "@/entities/log"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DayPicker } from "@/components/ui/day-picker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ValidationError } from "@/components/validation-error"
import { useAuth } from "@/hooks/use-auth"
import { useMutation } from "@tanstack/react-query"
import { createLog } from "@/api/log/create-log"
import { toast } from "sonner"


const logsFormCreateSchema = z.object({
  name: z.string().min(2),
  timeSpent: z.number().min(0),
  date: z.date(),
})

type LogsFormCreateInput = z.infer<typeof logsFormCreateSchema>

export function LogsFormCreate() {
  const { user } = useAuth()

  const { register, handleSubmit, control, formState: { isSubmitting, errors } } = useForm<LogsFormCreateInput>({
    resolver: zodResolver(logsFormCreateSchema),
  })

  const {mutateAsync: createLogFn} = useMutation({
    mutationFn: createLog
  })

  function hoursToSeconds(hours: number): number {
    return Math.round(hours * 3600)
  }

  async function handleCreateLog(data: LogsFormCreateInput) {
    const newLog: LogInput = {
      userId: user?.uid ?? "",
      date: format(data.date, "yyyy-MM-dd"),
      timeSpentInSeconds: hoursToSeconds(data.timeSpent),
      yearMonth: format(data.date, "yyyy-MM"),
      name: data.name,
    }

    try {
      const response = await createLogFn(newLog)
      console.log(response);

      toast.success("Log created!")
      
    } catch (error) {
      console.log('error => ', error);
      
      toast.error("Something failed...", {
         description: "Please try again"
      })
    }
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
            {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label>Time spent (h)*</Label>
              <Input type="number" step="any" {...register("timeSpent", { valueAsNumber: true })} />
              {errors.timeSpent && <ValidationError>{errors.timeSpent.message}</ValidationError>}

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
              {errors.date && <ValidationError>{errors.date.message}</ValidationError>}

            </div>
          </div>

          <Button type="submit" disabled={isSubmitting}>
            <Plus />
            Create
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const logsFiltersSchema = z.object({
  month: z.string(),
  year: z.string(),
})

  type LogsFiltersInput = z.infer<typeof logsFiltersSchema>

export function LogsTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const today = new Date()
  const month = searchParams.get("month") || `0${today.getMonth() + 1}`
  const year = searchParams.get("year") || today.getFullYear().toString()

  const { handleSubmit, control, formState: { isSubmitting } } = useForm<LogsFiltersInput>({
    resolver: zodResolver(logsFiltersSchema),
    defaultValues: {
      month,
      year,
    },
  })

  function handleFilterLogs(data: LogsFiltersInput) {
    setSearchParams((url) => {
      url.set("month", data.month)
      url.set("year", data.year)
      return url
    })
  }

  return (
    <form onSubmit={handleSubmit(handleFilterLogs)} className="flex gap-2 items-center">

      <Controller
        name="month"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="01">Jan</SelectItem>
              <SelectItem value="02">Feb</SelectItem>
              <SelectItem value="03">Mar</SelectItem>
              <SelectItem value="04">Apr</SelectItem>
              <SelectItem value="05">May</SelectItem>
              <SelectItem value="06">Jun</SelectItem>
              <SelectItem value="07">Jul</SelectItem>
              <SelectItem value="08">Aug</SelectItem>
              <SelectItem value="09">Sep</SelectItem>
              <SelectItem value="10">Oct</SelectItem>
              <SelectItem value="12">Nov</SelectItem>
              <SelectItem value="12">Dec</SelectItem>

            </SelectContent>
          </Select>
        )}
      />

      <Controller
        name="year"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {[2024, 2025, 2026, 2027, 2028].map(year => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}

            </SelectContent>
          </Select>
        )}
      />

      <Button variant="ghost" type="submit" disabled={isSubmitting}>Filter</Button>
    </form>
  )
}

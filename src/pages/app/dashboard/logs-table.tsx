import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"

import { getLogs } from "@/api/log/get-logs"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useAuth } from "@/hooks/use-auth"
import { LogsTableRow } from "@/pages/app/dashboard/logs-table-row"

export function LogsTable() {
  const { user } = useAuth()
  const [searchParams] = useSearchParams()

  const today = new Date()
  const month = searchParams.get("month") || `0${today.getMonth() + 1}`
  const year = searchParams.get("year") || today.getFullYear().toString()

  const { data: logs } = useQuery({
    queryKey: ["logs", month, year],
    queryFn: () => getLogs({ userId: user!.uid, month, year }),
  })

  return (

    <div className="border rounded-md">
      <Table>
        <TableHeader className="bg-foreground/5">
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead className="w-[100px]">Hours</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>

          {logs
            ? logs.map(log => (
                <LogsTableRow key={log.id} {...log} />
              ))
            : <tr></tr>}
        </TableBody>
      </Table>
    </div>

  )
}

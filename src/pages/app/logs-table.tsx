import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { LogsTableRow } from "@/pages/app/logs-table-row"

export function LogsTable() {
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
          {Array.from({ length: 20 }).map((_, idx) => (
            <LogsTableRow key={idx} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

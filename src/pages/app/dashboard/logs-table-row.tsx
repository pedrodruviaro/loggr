import { Menu } from "lucide-react"

import type { Log } from "@/entities/log"

import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"

export function LogsTableRow(log: Log) {
  return (
    <TableRow>
      <TableCell className="font-medium">{log.date}</TableCell>
      <TableCell>{log.timeSpentInSeconds }</TableCell>
      <TableCell>{log.name}</TableCell>
      <TableCell className="text-right">
        <div>
          <Button size="sm" variant="ghost">
            <Menu />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

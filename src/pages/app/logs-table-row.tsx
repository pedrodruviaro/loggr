import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"

export function LogsTableRow() {
  return (
    <TableRow>
      <TableCell className="font-medium">17/04/2025</TableCell>
      <TableCell>2,5h</TableCell>
      <TableCell>Lorem ipsum dolor sit amet.</TableCell>
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

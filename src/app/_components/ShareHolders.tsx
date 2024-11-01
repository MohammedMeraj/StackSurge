"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
    { id: "x2fg84kd", equity: 453, investorName: "TechVentures", companyEmail: "contact@spacexventures.com" },
  { id: "b1n7ej49", equity: 212, investorName: "NextGen", companyEmail: "info@teslafinance.com" },
  { id: "v0hs93re", equity: 378, investorName: "Sarah Adams", companyEmail: "sarah.adams@appleinvestors.com" },
  { id: "j4tgz8qw", equity: 539, investorName: "StartupHub", companyEmail: "invest@microsofthub.com" },
  { id: "d9oi5fg2", equity: 621, investorName: "Growth Capital", companyEmail: "team@googlegrowth.com" },
  { id: "a5kz9x7u", equity: 298, investorName: "Blue Sky Investments", companyEmail: "connect@blueskyamazon.com" },
  { id: "z3g5vs1e", equity: 834, investorName: "Pioneer Partners", companyEmail: "partners@netflixpioneers.com" },
  { id: "f9kj2lz6", equity: 150, investorName: "SeedFund", companyEmail: "contact@airbnbfund.com" },
  { id: "h7qu1xn3", equity: 492, investorName: "John Roberts", companyEmail: "john.roberts@facebookbackers.com" },
  { id: "g2pq9wj8", equity: 777, investorName: "Elite Ventures", companyEmail: "support@twitterelite.com" },
  { id: "k5rm8ox4", equity: 264, investorName: "Lucy Hale", companyEmail: "lucy.hale@snapinvest.com" },
  { id: "n8zr6ly2", equity: 585, investorName: "Urban Invest", companyEmail: "hello@urbanlinkedin.com" },
  { id: "m3tj9qa7", equity: 347, investorName: "Franklin Doe", companyEmail: "franklin.doe@stripesolutions.com" },
  { id: "p4dk1ut9", equity: 450, investorName: "Capital Edge", companyEmail: "team@spotifyedge.com" },
  { id: "u6vn3eb5", equity: 325, investorName: "Nathan Pierce", companyEmail: "nathan.pierce@shopifygroup.com" },
  { id: "q9hs4zm6", equity: 580, investorName: "Aspire Holdings", companyEmail: "info@aspireuber.com" },
  { id: "l2cg5ik3", equity: 419, investorName: "Alice Zhang", companyEmail: "alice.zhang@adobeinvest.com" },
  { id: "t5pj7qx1", equity: 710, investorName: "Innovation Fund", companyEmail: "contact@coinbaseinnovators.com" },
  { id: "w3bv2ol4", equity: 295, investorName: "Charlie Brown", companyEmail: "charlie.brown@tiktokinvestments.com" },
  { id: "y8mh6sd9", equity: 675, investorName: "Prime Capital", companyEmail: "support@pinterestprime.com" }
  
];

export type Payment = {
  id: string;
 equity: number;
  investorName: string;
  companyEmail: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "investorName",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("investorName")}</div>
    ),
  },
  {
    accessorKey: "companyEmail",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Company Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("companyEmail")}</div>,
  },
  {
    accessorKey: "equity",
    header: () => <div className="text-right">Invested Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("equity") as string);

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search by Email..."
          value={(table.getColumn("companyEmail")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("companyEmail")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
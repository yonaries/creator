"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { DataTablePagination } from "./data-table-pagination";
import { cva } from "class-variance-authority";
import DataTableToolBar from "./data-table-tool-bar";
import { LucideIcon } from "lucide-react";

const rowBackgroundVariants = cva("border-b-0", {
  variants: {
    bg: {
      true: "bg-muted dark:bg-muted",
      false: "bg-transparent",
    },
  },
});

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title: string;
  caption?: string;
  filterColumnName?: string;
  facetFilters?: {
    column?: string;
    title?: string;
    options: {
      label: string;
      value: string;
      icon?: LucideIcon;
    }[];
  }[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  title,
  caption,
  filterColumnName,
  facetFilters,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      <DataTableToolBar
        table={table}
        facetFilters={facetFilters}
        filterColumnName={filterColumnName}
      />
      <div className="rounded-xl bg-white p-4 dark:bg-transparent">
        <h1 className="text-xl font-bold dark:text-white">{title}</h1>
        <TableCaption className="mb-4 mt-1 block text-left">
          {caption}
        </TableCaption>
        <div>
          <Table className="">
            <TableHeader className="bg-muted dark:bg-muted">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header, index, arr) => {
                    return (
                      <TableHead
                        key={header.id}
                        className={`${index == 0 && "rounded-tl-2xl"} ${
                          index == arr.length - 1 && "rounded-tr-2xl"
                        }`}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel()?.rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={rowBackgroundVariants({
                      bg: index % 2 === 1,
                    })}
                  >
                    {row.getVisibleCells().map((cell, index, arr) => (
                      <TableCell
                        key={cell.id}
                        className={`${index == 0 && "rounded-l-2xl"} ${
                          index == arr.length - 1 && "rounded-r-2xl"
                        }`}
                      >
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
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}

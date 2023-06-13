"use client";
import React from "react";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Table } from "@tanstack/react-table";
import { LucideIcon, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolBarProps<TData> {
  table: Table<TData>;
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

export default function DataTableToolBar<TData>({
  table,
  filterColumnName,
  facetFilters,
}: DataTableToolBarProps<TData>) {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length;

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        {filterColumnName && (
          <Input
            placeholder={`Filter by ${filterColumnName.toLowerCase()} ...`}
            value={
              (table.getColumn(filterColumnName)?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn(filterColumnName)
                ?.setFilterValue(event.target.value)
            }
            className="h-8 max-w-sm"
          />
        )}

        {facetFilters?.map(
          (facetFilter, index) =>
            table.getColumn(String(facetFilter.column)) && (
              <DataTableFacetedFilter
                column={table.getColumn(String(facetFilter.column))}
                options={facetFilter.options}
                title={facetFilter.title}
                key={`${index}${facetFilter.title}`}
              />
            )
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <DataTableViewOptions table={table} />
    </div>
  );
}

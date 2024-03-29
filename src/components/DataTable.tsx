import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Sort = [string, 'asc' | 'desc'];

type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T, string>[];
  sort?: Sort;
  onSortChange?: (value: Sort) => void;
  cellClassName?: string;
  Empty?: React.FC;
  Footer?: React.ReactNode;
};

const DefaultCell = ({ getValue }: { getValue: () => any }) => (
  <div>{getValue() ?? '----'}</div>
);

const DefaultEmpty = () => (
  <div className="flex min-h-[200px] w-full items-center justify-center text-gray-500">
    Empty
  </div>
);

export function DataTable<T>({
  data,
  columns,
  sort,
  onSortChange,
  cellClassName = '',
  Empty = DefaultEmpty,
  Footer,
}: DataTableProps<T>) {
  const defaultColumn = useMemo(
    () => ({
      minSize: 30,
      cell: DefaultCell,
    }),
    []
  ) as Partial<ColumnDef<T>>;

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
  });

  const handleSortChange = (columnId: string) => {
    if (!onSortChange) {
      return;
    }

    if (sort?.[0] === columnId) {
      if (sort?.[1] === 'asc') {
        onSortChange([columnId, 'desc']);
      } else {
        onSortChange([columnId, 'asc']);
      }
    } else {
      onSortChange([columnId, 'asc']);
    }
  };

  const rows = table.getRowModel().rows;
  return (
    <div className="max-w-full overflow-x-auto">
      {/* table */}
      <div className={'w-full rounded border align-middle bg-inherit'}>
        {/* thead */}
        <div className="border-b border-gray-200 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <div
              key={headerGroup.id}
              className={'flex divide-x divide-gray-200'}
            >
              {headerGroup.headers.map((header) => (
                <div
                  key={header.id}
                  className={twMerge(
                    'relative w-full items-center px-6 py-3 text-left text-sm font-medium capitalize tracking-wider text-gray-500 hover:bg-gray-100',
                    cellClassName
                  )}
                  style={{ position: 'relative', width: header.getSize() }}
                  onClick={() => handleSortChange(header.id)}
                  role="button"
                  tabIndex={0}
                >
                  <div>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                    {header.id === sort?.[0] && (
                      <span className="ml-2">
                        {sort?.[1] === 'asc' ? '▲' : '▼'}
                      </span>
                    )}
                  </div>
                  {header.column.getCanResize() ? (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`absolute right-0 top-0 z-10 inline-block h-full w-1 hover:bg-red-400 cursor-col-resize ${
                        header.column.getIsResizing() ? 'shadow' : ''
                      }`}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* tbody */}
        <div>
          {rows.length === 0 ? (
            <Empty />
          ) : (
            <>
              {rows.map((row) => (
                <div
                  key={row.id}
                  className="flex group border-b last:border-b-0 hover:bg-gray-100"
                >
                  {row.getVisibleCells().map((cell) => (
                    <div
                      key={cell.id}
                      className={twMerge(
                        'px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate',
                        cellClassName
                      )}
                      style={{ width: cell.column.getSize() }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  ))}
                </div>
              ))}
              {/* footer */}
              {Footer}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { DataTable } from '..';
import { MockMembers, MockMembersColumns } from '../mocks/data';

export default {
  title: 'components/DataTable',
  component: DataTable,
};

export const StandardTable = () => {
  const data = MockMembers;

  const columns = MockMembersColumns;

  return (
    <DataTable columns={columns} data={data} sort={['firstName', 'asc']} />
  );
};

export const CompactTable = () => {
  const data = MockMembers;

  const columns = MockMembersColumns;

  return (
    <DataTable
      columns={columns}
      data={data}
      sort={['firstName', 'asc']}
      cellClassName="px-2 py-1"
    />
  );
};

export const EmptyTable = () => {
  const columns = MockMembersColumns;

  return <DataTable columns={columns} data={[]} />;
};

export const TableWithFooter = () => {
  const columns = MockMembersColumns;
  const [items, setItems] = useState(MockMembers);

  const handleAdd = () => {
    setItems([
      ...items,
      {
        firstName: 'new',
        lastName: 'member',
        age: 30,
        visits: 101,
        status: 'In Relationship',
        progress: 100,
      },
    ]);
  };

  return (
    <DataTable
      columns={columns}
      data={items}
      Footer={
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mx-4 my-3"
        >
          Add
        </button>
      }
    />
  );
};

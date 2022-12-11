import React from 'react';
import { DataTable } from '..';
import { MockMembers, MockMembersColumns } from '../mocks/data';

export default {
  title: 'components/DataTable',
  component: DataTable,
};

export const TextTable = () => {
  const data = MockMembers;

  const columns = MockMembersColumns;

  return (
    <DataTable columns={columns} data={data} sort={['firstName', 'asc']} />
  );
};

export const EmptyTable = () => {
  const columns = MockMembersColumns;

  return <DataTable columns={columns} data={[]} />;
};

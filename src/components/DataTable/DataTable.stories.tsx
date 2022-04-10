import React, { useMemo } from 'react';
import MemberAvatar from '../MemberAvatar/MemberAvatar';
import { Member } from '../../data/interfaces';

import DataTable from './DataTable';

import { MockMembers, MockMembersTableColumns } from '../../data/mocks';

export default {
  title: 'components/DataTable',
  component: DataTable,
};

export const TextTable = () => {
  const columns = useMemo(() => MockMembersTableColumns, []);

  return (
    <DataTable columns={columns} data={MockMembers} sort={['name', 'asc']} />
  );
};

export const MemberAvatarTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'name',
        accessor: 'name',
        width: 300,
        // eslint-disable-next-line react/display-name
        Cell: (data: {
          row: {
            original: Member;
          };
        }) => {
          const member = data.row.original;
          return <MemberAvatar member={member} />;
        },
      },
      {
        Header: 'mail',
        accessor: 'mail',
      },
      {
        Header: 'phone',
        accessor: 'phone',
      },
      {
        Header: 'address',
        accessor: 'address',
      },
    ],
    []
  );

  // @ts-ignore FIXME:
  return <DataTable columns={columns} data={MockMembers} />;
};

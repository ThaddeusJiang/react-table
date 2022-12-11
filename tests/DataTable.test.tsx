import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MockMembers, MockMembersColumns } from '../mocks/data';

import { DataTable } from '../';

describe('components/DataTable', () => {
  test('should render 3 rows and 6 columns', () => {
    render(<DataTable columns={MockMembersColumns} data={MockMembers} />);

    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Visits')).toBeInTheDocument();
    expect(screen.getByText('Member Status')).toBeInTheDocument();
    expect(screen.getByText('Progress')).toBeInTheDocument();

    expect(screen.getByText('tanner')).toBeInTheDocument();
    expect(screen.getByText('linsley')).toBeInTheDocument();
    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText('101')).toBeInTheDocument();
    expect(screen.getByText('In Relationship')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();

    expect(screen.getByText('tandy')).toBeInTheDocument();
    expect(screen.getByText('joe')).toBeInTheDocument();
  });

  test.skip('should change sort', () => {
    const onSortChange = jest.fn();

    render(
      <DataTable
        columns={MockMembersColumns}
        data={MockMembers}
        onSortChange={onSortChange}
      />
    );

    const mailHeader = screen.getByText('mail');
    expect(mailHeader).toBeInTheDocument();
    act(() => {
      userEvent.click(mailHeader);
    });
    expect(onSortChange).toBeCalledTimes(1);
  });
});

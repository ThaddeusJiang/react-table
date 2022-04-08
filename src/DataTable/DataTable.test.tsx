import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import DataTable from './DataTable';

import { MockMembers, MockMembersTableColumns } from '../data/mocks';

describe('components/DataTable', () => {
  test('should render 2 rows and 5 columns', () => {
    render(<DataTable columns={MockMembersTableColumns} data={MockMembers} />);

    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('kana')).toBeInTheDocument();
    expect(screen.getByText('mail')).toBeInTheDocument();
    expect(screen.getByText('phone')).toBeInTheDocument();
    expect(screen.getByText('address')).toBeInTheDocument();

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe@me.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (123) 456-7891')).toBeInTheDocument();
    expect(screen.getByText('001 Main St, Anywhere, USA')).toBeInTheDocument();

    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
  test('should change sort', () => {
    const onSortChange = jest.fn();

    render(
      <DataTable
        columns={MockMembersTableColumns}
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

import { Meta } from '@storybook/react';
import React from 'react';

import Pagination from './Pagination';

export default {
  component: Pagination,
  title: 'components/Pagination',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

export const Basic: React.VFC = () => (
  <Pagination
    previousPage={() => ''}
    canPreviousPage={false}
    nextPage={() => ''}
    canNextPage
    pageIndex={0}
    pageSize={100}
    setPageSize={() => ''}
    total={107}
  />
);

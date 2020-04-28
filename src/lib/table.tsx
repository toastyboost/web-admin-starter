import * as React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

type FilterDropdown = {
  setSelectedKeys: (keys: string[]) => string;
  selectedKeys: string[];
  confirm: () => void;
  clearFilters: () => void;
};

type SearchTypes = {
  ref: React.RefObject<Input>;
  placeholder: string;
};

export function addSearch({ placeholder, ref }: SearchTypes) {
  return {
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
    }: FilterDropdown) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={ref}
            placeholder={placeholder}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={confirm}
            style={{ width: 208, marginBottom: 8, display: 'block' }}
          />
          <Button
            onClick={confirm}
            type="primary"
            size="small"
            style={{ width: 100, marginRight: 8 }}
          >
            Найти
          </Button>
          <Button
            onClick={() => {
              setSelectedKeys(['']);
              confirm();
            }}
            size="small"
            style={{ width: 100 }}
          >
            Сбросить
          </Button>
        </div>
      ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => ref?.current?.focus());
      }
    },
  };
}

export function addFilter<T>(fields: (keyof T)[]) {
  return {
    onFilter: (value: string | number | boolean, record: T) => {
      const normalize = (value: any): string => String(value).toLowerCase();
      const elements = fields.map((item) => normalize(record[item]));
      return elements.join(' ').includes(normalize(value));
    },
  };
}

export function addSorter<T>(field: keyof T) {
  return {
    sorter: (a: T, b: T) => {
      if (a[field] > b[field]) return 1;
      if (a[field] < b[field]) return -1;
      return 0;
    },
  };
}

export function addFilterOptions(items: string[]) {
  const filters = items.map((item: string) => ({ text: item, value: item }));
  return { filters };
}
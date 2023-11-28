type ColumnsAlign = 'left' | 'right' | 'center';

export type Columns = {
  show?: boolean;
  slot?: string;
  prop?: string;
  label: string;
  type?: string;
  width?: string;
  minWidth?: string;
  align?: ColumnsAlign;
  headerAlign?: ColumnsAlign;
  showOverflowTooltip?: boolean;
  sortable?: 'custom' | boolean;
}

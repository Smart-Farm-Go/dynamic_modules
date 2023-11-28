type ColumnsAlign = 'left' | 'right' | 'center'
export type Columns = {
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
  // 子模块 props 负载
  [key: string]: any;
}

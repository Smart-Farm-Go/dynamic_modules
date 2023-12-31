import { FormItemRule } from 'element-plus';

interface ColItem {
  span?: number;
  pull?: number;
  push?: number;
  offset?: number;
}

interface FieldCol extends ColItem {
  xs?: ColItem | number;
  sm?: ColItem | number;
  md?: ColItem | number;
  lg?: ColItem | number;
  xl?: ColItem | number;
}

export type Fields = FieldCol & {
  slot?: string;
  type?: string;
  show?: boolean;
  //
  prop: string;
  label?: string;
  inlineMessage: boolean;
  labelWidth?: string | number;
  rules?: FormItemRule | FormItemRule[];
}

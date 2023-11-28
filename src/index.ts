import { Table } from './package/Table';
import { Form } from './package/Form';
import { App } from 'vue';

export const DynamicForm = Form;
export const DynamicTable = Table;

export default {
  DynamicForm,
  DynamicTable,
  install: (app: App<Element>) => {
    app.component('dynamic-form', DynamicForm);
    app.component('dynamic-table', DynamicTable);
  },
};

import DynamicTableView from './package/dynamicTable.vue';
import { Form } from './package/Form';
import { App } from 'vue';

const install = (app: App<Element>) => {
  app.component('dynamic-table', DynamicTableView);
  app.component('dynamic-form', Form);
};

export const DynamicForm = Form;
export const DynamicTable = DynamicTableView;

export default {
  DynamicTable: DynamicTableView,
  DynamicForm,
  install,
};

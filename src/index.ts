import DynamicTableView from './components/dynamicTable.vue';
import DynamicFormView from './components/dynamicForm.vue';
import { App } from 'vue';

const install = (app: App<Element>) => {
  app.component('dynamic-table', DynamicTableView);
  app.component('dynamic-form', DynamicFormView);
};

export default {
  install,
  DynamicForm: DynamicFormView,
  DynamicTable: DynamicTableView,
};

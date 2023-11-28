import Modules from './package/modules.vue';
import { Table } from './package/Table';
import { Form } from './package/Form';
import { App } from 'vue';

export const DynamicForm = Form;
export const DynamicTable = Table;
export const DynamicModules = Modules;

export default {
  DynamicForm,
  DynamicTable,
  DynamicModules,
  install: (app: App<Element>) => {
    app.component('dynamic-form', DynamicForm);
    app.component('dynamic-table', DynamicTable);
    app.component('dynamic-modules', DynamicModules);
  },
};

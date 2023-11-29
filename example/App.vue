<template>
  <el-config-provider size="small">
    {{ form.values }}
    <dynamic-form v-model="form.values" :fields="form.fields">
      <template v-slot:testSlot>内容插槽</template>
    </dynamic-form>
    {{ table.values }}
    <dynamic-table :data="table.values" :columns="table.columns">
      <template v-slot:testSlot>内容插槽</template>
    </dynamic-table>
  </el-config-provider>
</template>

<script lang="ts">export default { name: 'App' };</script>
<script lang="ts" setup>
import { reactive } from 'vue';

const SelectOptions = [
  { name: '测试', value: '测试1' },
];

const form = reactive<any>({
  values: { count: 100 },
  fields: [
    { label: '账号', prop: 'user', types: 'input', placeholder: '请输入账号' },
    { label: '密码', prop: 'pass', type: 'password', types: 'input', placeholder: '请输入密码' },
    { label: '计数器', prop: 'count', types: 'number' },
    { label: '日期选择器', prop: 'count', type: 'daterange', types: 'date_picker' },
    { label: '选择器', prop: 'select', types: 'select', options: SelectOptions, labelText: 'name' },
    { label: '插槽', slot: 'testSlot' },
  ],
});

const table = reactive<any>({
  values: [
    { user: '123456', pass: '123456' },
  ],
  columns: [
    { label: '账号', prop: 'user', types: 'input', placeholder: '请输入账号' },
    { label: '密码', prop: 'pass', types: 'password', placeholder: '请输入密码' },
    { label: '计数器', prop: 'count', types: 'number' },
    { label: '插槽', slot: 'testSlot' },
  ],
});
</script>

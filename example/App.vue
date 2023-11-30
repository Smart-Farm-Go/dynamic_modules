<template>
  <el-config-provider size="small">
    {{ form.values }}
    <dynamic-form v-model="form.values" :fields="form.fields">
      <template v-slot:testSlot>内容插槽</template>
    </dynamic-form>
    {{ table.values }}
    <dynamic-table :data="table.values" :columns="table.columns">
      <el-table-column type="index" label="排序"/>
      <template v-slot:testSlot>内容插槽</template>
    </dynamic-table>
    <component :is="suffixBtn"/>
  </el-config-provider>
</template>

<script lang="ts">export default { name: 'App' };</script>
<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { h, reactive } from 'vue';

const SelectOptions = [
  { name: '测试', value: '测试1' },
];

const suffixBtn = h(ElButton, '获取验证码');

const form = reactive<any>({
  values: { count: 100 },
  fields: [
    { label: '账号', prop: 'user', types: 'input', placeholder: '请输入账号' },
    { label: '密码', prop: 'pass', type: 'password', types: 'input', placeholder: '请输入密码' },
    { label: '计数器', prop: 'count', types: 'number' },
    { label: '日期选择器', prop: 'date', type: 'daterange', types: 'date_picker' },
    { label: '选择器', prop: 'select', types: 'select', options: SelectOptions, labelText: 'name' },
    { label: '验证码', prop: 'code', types: 'input', clearable: true, on: { clear: onClear, focus: onFocus }, slots: { suffix: 'text', append: suffixBtn } },
    //
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


function onGetCode(event: Event) {
  console.log('onGetCode', event);
}

function onFocus(event: Event) {
  console.log('onFocus', event);
}

function onClear(event: Event) {
  console.log('onClear', event);
}
</script>

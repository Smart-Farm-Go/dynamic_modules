<template>
  <dynamic-form v-model="form.values" :fields="form.fields">
    <template v-slot:testSlot>内容插槽</template>
  </dynamic-form>
  <dynamic-table :data="table.values" :columns="table.columns">
    <template v-slot:testSlot>内容插槽</template>
  </dynamic-table>
</template>

<script lang="ts">export default { name: 'App' };</script>
<script lang="ts" setup>
import { reactive } from 'vue';

const form = reactive<any>({
  values: { count: 100 },
  fields: [
    { label: '账号', prop: 'user', type: 'input', placeholder: '请输入账号' },
    { label: '密码', prop: 'pass', type: 'password', placeholder: '请输入密码' },
    { label: '计数器', prop: 'count', type: 'number' },
    { label: '插槽', slot: 'testSlot' },
  ],
});

const table = reactive<any>({
  values: [
    { user: '123456', pass: '123456' },
  ],
  columns: [
    { label: '账号', prop: 'user', type: 'input', placeholder: '请输入账号' },
    { label: '密码', prop: 'pass', type: 'password', placeholder: '请输入密码' },
    { label: '计数器', prop: 'count', type: 'number' },
    { label: '插槽', slot: 'testSlot' },
  ],
});
</script>

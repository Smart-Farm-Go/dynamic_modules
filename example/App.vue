<template>
  <dynamic-form v-model="form.values" :fields="form.fields">
    <template v-slot:testSlot>
      内容插槽
    </template>
  </dynamic-form>
  <button @click="form.fields[0].show = !form.fields[0].show">{{ form.fields[0].show }}</button>
  <button @click="addCount">{{ form.fields[2].placeholder }}</button>
  <dynamic-table :data="table.values" :columns="table.columns">
    <template v-slot:testSlot="{rowIndex}">
      <span>{{ rowIndex }}</span>
      <div>内容插槽</div>
    </template>
  </dynamic-table>
</template>

<script lang="ts">export default { name: 'App' };</script>

<script lang="ts" setup>
import { reactive } from 'vue';

const form = reactive({
  values: { count: 100 },
  fields: [
    { label: '账号', prop: 'user', type: 'input', placeholder: '请输入账号' },
    { label: '密码', prop: 'pass', type: 'input', placeholder: '请输入密码' },
    { label: '计数器', prop: 'count', type: 'input', placeholder: '0' },
    { label: '插槽', slot: 'testSlot' },
  ],
});

const table = reactive({
  values: [
    { user: '123456', pass: '123456' },
  ],
  columns: [
    { label: '账号', prop: 'user', type: 'input', placeholder: '请输入账号' },
    { label: '密码', prop: 'pass', type: 'input', placeholder: '请输入密码' },
    { label: '插槽', slot: 'testSlot' },
  ],
});

function addCount() {
  const count = parseInt(form.fields[2].placeholder);
  form.fields[2].placeholder = (count + 1).toString();
}
</script>

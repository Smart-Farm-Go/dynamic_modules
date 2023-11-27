<template>
  <dynamic-form v-model="data.form.values" :fields="data.form.fields">
    <template v-slot:testSlot>
      内容插槽
    </template>
  </dynamic-form>
  <dynamic-table/>
  {{ data.form.values }}
  <button @click="data.form.fields[0].show = !data.form.fields[0].show">{{ data.form.fields[0].show }}</button>
  <button @click="addCount">{{ data.form.fields[2].placeholder }}</button>
</template>

<script lang="ts">export default { name: 'App' };</script>

<script lang="ts" setup>
import { reactive } from 'vue';

const data = reactive<any>({
  form: {
    values: { count: 100 },
    fields: [
      { label: '账号', prop: 'user', type: 'input', placeholder: '请输入账号' },
      { label: '密码', prop: 'pass', type: 'input', placeholder: '请输入密码' },
      { label: '计数器', prop: 'count', type: 'input', placeholder: '0' },
      { label: '插槽', slot: 'testSlot' },
    ],
  },
});

function addCount() {
  const count = parseInt(data.form.fields[2].placeholder);
  data.form.fields[2].placeholder = (count + 1).toString();
}
</script>

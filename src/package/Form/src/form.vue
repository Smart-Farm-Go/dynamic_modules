<template>
  <el-form ref="formRef" :model="props.modelValue" v-bind="bindForm">
    <el-row v-bind="bindRow">
      <template v-for="(fields, key) of props.fields" :key="key">
        <el-col v-if="handlerIsShow(fields)" v-bind="handlerBindCol(fields)">
          <el-form-item v-bind="handlerBindFormItem(fields)">
            <slot v-if="fields.slot" :name="fields.slot" :fields="fields"/>
            <dynamic-modules v-else :fields="fields"/>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts">export default { name: 'DynamicForm' };</script>
<script lang="ts" setup>
import { ReWriteObj } from '../../../utils/object';
import DynamicModules from '../../modules.vue';
import { computed, provide, ref } from 'vue';
import { FormItemRule } from 'element-plus';
import { Fields } from './interface';

interface Props {
  fields: Fields[];
  modelValue?: any;
  //
  inline?: boolean;
  disabled?: boolean;
  labelWidth?: string;
  showMessage?: boolean;
  scrollToError?: boolean;
  inlineMessage?: boolean;
  labelPosition?: 'left' | 'right';
  rules: { [name: string]: FormItemRule[] };
  //
  gutter: number;
  align: 'top' | 'middle' | 'bottom';
  justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
}

const props = withDefaults(defineProps<Props>(), {
  fields: () => [],
  rules: () => ({}),
  showMessage: true,
  scrollToError: true,
  labelPosition: 'right',
  modelValue: () => ({}),
});

// 向下传递
provide('values', computed(() => props.modelValue));
provide('rules', computed(() => props.rules));

const formRef = ref<any>(null);

const bindForm = computed(() => {
  return ReWriteObj(props, ['rules', 'disabled', 'labelWidth', 'labelPosition', 'scrollToError', 'showMessage', 'inner'], false);
});

const bindRow = computed(() => {
  return ReWriteObj(props, ['gutter', 'align', 'justify'], false);
});

function handlerIsShow(fields: Fields) {
  return !('show' in fields && !fields.show);
}

function handlerBindCol(fields: Fields) {
  return ReWriteObj(fields, ['span', 'pull', 'push', 'offset', 'xs', 'sm', 'md', 'lg', 'xl']);
}

function handlerBindFormItem(fields: Fields) {
  return ReWriteObj(fields, ['prop', 'label', 'rules', 'labelWidth', 'inlineMessage']);
}

defineExpose({ ref: computed(() => formRef.value) });
</script>

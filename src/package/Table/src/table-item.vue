<template>
  <dynamic-modules :fields="handlerBind"/>
</template>

<script lang="ts">export default { name: 'DynamicTableItem' };</script>
<script lang="ts" setup>
import DynamicModules from '../../modules.vue';
import { computed, provide } from 'vue';
import { Columns } from './interface';

interface Props {
  row?: any;
  column?: any;
  columns: Columns;
  rowIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {});

provide('values', computed(() => props.row));

const handlerBind = computed(() => {
  const { row, rowIndex, column, columns } = props;
  return Object.assign({}, columns, { row, rowIndex, column });
});
</script>

<template>
  <el-table v-bind="bindTable">
    <slot/>
    <template v-for="(columns,key) of props.columns" :key="key">
      <el-table-column v-bind="handlerBindColumn(columns)">
        <template v-slot="{...bindProp}">
          <slot v-if="columns.slot" :name="columns.slot" :columns="columns" v-bind="handlerColumn(bindProp)"/>
          <dynamic-table-item v-else :columns="columns" v-bind="handlerColumn(bindProp)"/>
        </template>
      </el-table-column>
    </template>
    <template v-if="$slots.append" v-slot:append>
      <slot name="append"/>
    </template>
    <template v-if="$slots.empty" v-slot:empty>
      <slot name="empty"/>
    </template>
  </el-table>
</template>

<script lang="ts">export default { name: 'DynamicTable' };</script>
<script lang="ts" setup>
import { ReWriteObj } from '../../../utils/object';
import DynamicTableItem from './table-item.vue';
import { Columns } from './interface';
import { computed } from 'vue';

interface Props {
  columns?: Columns[];
  //
  data?: any[];
  rowKey?: string;
  stripe?: boolean;
  border?: boolean;
  emptyText?: string;
  showHeader?: boolean;
  defaultExpandAll?: boolean;
  highlightCurrentRow?: boolean;
  defaultSort?: { props?: string; order?: 'ascending' | 'descending' };
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  showHeader: true,
  columns: () => [],
});

const bindTable = computed(() => {
  return ReWriteObj(props, ['data', 'rowKey', 'stripe', 'border', 'emptyText', 'showHeader', 'defaultSort', 'defaultExpandAll', 'highlightCurrentRow']);
});

function handlerBindColumn(columns: Columns) {
  return ReWriteObj(columns, ['prop', 'label', 'type', 'width', 'minWidth', 'align', 'headerAlign', 'showOverflowTooltip', 'sortable']);
}

function handlerColumn(row: any) {
  row['rowIndex'] = row['$index'];
  delete row['$index'];
  return row;
}
</script>

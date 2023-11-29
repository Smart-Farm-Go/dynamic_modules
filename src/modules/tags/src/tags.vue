<template>
  <div style="display: inline-table;">
    <tag v-for="(item, key) of props.options" :key="key" v-bind="handlerTag(item)"
         v-model="item.value"
         @click="onEmits('click', key, item)"
         @close="onEmits('close', key, item)"
    />
  </div>
</template>

<script lang="ts">export default { name: 'DynamicModulesTags' };</script>
<script lang="ts" setup>
import { ReWriteObj } from '../../../utils/object';
import Tag from './tag.vue';

interface TagProps {
  hit?: boolean;
  color?: string;
  value?: string;
  round?: boolean;
  closable?: boolean;
  disableTransitions?: boolean;
  effect?: 'dark' | 'light' | 'plain';
  size?: 'large' | 'default' | 'small';
  type?: 'success' | 'info' | 'warning' | 'danger';
}

const props = withDefaults(defineProps<{ options: TagProps[]; }>(), {
  options: () => [],
});

function handlerTag(tag: TagProps) {
  return ReWriteObj(tag, ['hit', 'size', 'type', 'color', 'round', 'effect', 'closable', 'disableTransitions']);
}

const emits = defineEmits(['click', 'close']);

function onEmits(type: 'click' | 'close', key: number, item: any) {
  return (event: Event) => emits(type, key, item, event);
}
</script>

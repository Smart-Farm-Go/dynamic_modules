<template>
  <component v-if="getType(props.is) === 'object' " :is="props.is"/>
  <template v-else>{{ props.is }}</template>
</template>

<script lang="ts">export default { name: 'DynamicModulesNewComponent', inheritAttrs: false };</script>
<script lang="ts" setup>
import { getType } from '../../utils/object';

const props = withDefaults(defineProps<{ is: any }>(), {});
</script>

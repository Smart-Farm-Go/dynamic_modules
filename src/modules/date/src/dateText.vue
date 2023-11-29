<template>
  <span>{{ value }}</span>
</template>

<script lang="ts">export default { name: 'DynamicModulesDateText' };</script>
<script lang="ts" setup>
import { dateFormat } from '../../../utils/date';
import { computed } from 'vue';

interface Props {
  format?: string;
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  format: 'Y-M-D H:I:S',
});

const value = computed(() => dateFormat(props.format, props.modelValue));
</script>

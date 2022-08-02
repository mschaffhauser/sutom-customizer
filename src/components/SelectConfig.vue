<script setup lang="ts">
import { computed } from 'vue'
import defaultConfigList from './../../json/config-emoji.json'

const props = defineProps({
  selected: String,
  text: String,
  configList: {
    type: Object,
    default: defaultConfigList,
  },
})

const emit = defineEmits(['update:selected'])

const value = computed({
  get() {
    return props.selected
  },
  set(value) {
    emit('update:selected', value)
  },
})
</script>

<template>
  <div>
    <label text-md my-4>{{ props.text }}</label>
    <select
      v-model="value" p="x4 y2"
      w="200px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    >
      <option v-for="config in configList" :key="config.name" :value="config.name">
        {{ config.name }}
        {{ config.correctEmoji }}
        {{ config.correctLetterEmoji }}
        {{ config.wrongLetterEmoji }}
      </option>
    </select>
  </div>
</template>

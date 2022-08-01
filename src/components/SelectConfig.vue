<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['selected', 'text'])

const emit = defineEmits(['update:selected'])

const value = computed({
  get() {
    return props.selected
  },
  set(value) {
    emit('update:selected', value)
  },
})
const customConfigList = [
  {
    name: 'chicks',
    correctSpotEmoji: '🐤',
    correctLetterEmoji: '🐣',
    wrongLetterEmoji: '🥚',
  },
  {
    name: 'dark',
    correctSpotEmoji: '🟩',
    correctLetterEmoji: '🟨',
    wrongLetterEmoji: '⬛',
  },
  {
    name: 'light',
    correctSpotEmoji: '🟩',
    correctLetterEmoji: '🟨',
    wrongLetterEmoji: '⬜',
  },
  {
    name: 'colorBlind',
    correctSpotEmoji: '🟧',
    correctLetterEmoji: '🟦',
    wrongLetterEmoji: '⬜',
  },
  {
    name: 'coeurSimple',
    correctSpotEmoji: '❤️',
    correctLetterEmoji: '💛',
    wrongLetterEmoji: '💙',
  },
  {
    name: 'coeur',
    correctSpotEmoji: '💚',
    correctLetterEmoji: '💛',
    wrongLetterEmoji: '💔',
  },
  {
    name: 'fruits',
    correctSpotEmoji: '🍏',
    correctLetterEmoji: '🍌',
    wrongLetterEmoji: '🍎',
  },
]
</script>

<template>
  <div>
    <label text-md my-4>{{ props.text }}</label>
    <select
      v-model="value" p="x4 y2"
      w="120px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    >
      <option v-for="config in customConfigList" :key="config.name" :value="config.name">
        {{ config.correctSpotEmoji }}
        {{ config.correctLetterEmoji }}
        {{ config.wrongLetterEmoji }}
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>

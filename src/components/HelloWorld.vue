<script setup>
import { ref, computed } from 'vue'

defineProps({
  msg: String
})
const customConfigList = [
  {
    name: 'dark',
    correctSpotEmoji: '🟩',
    correctLetterEmoji: '🟨',
    wrongLetterEmoji: '⬛'
  },
  {
    name: 'light',
    correctSpotEmoji: '🟩',
    correctLetterEmoji: '🟨',
    wrongLetterEmoji: '⬜'
  },
  {
    name: 'colorBlind',
    correctSpotEmoji: '🟧',
    correctLetterEmoji: '🟦',
    wrongLetterEmoji: '⬜'
  },
  {
    name: 'coeur',
    correctSpotEmoji: '💚',
    correctLetterEmoji: '💛',
    wrongLetterEmoji: '💔'
  },
  {
    name: 'fruits',
    correctSpotEmoji: '🍏',
    correctLetterEmoji: '🍌',
    wrongLetterEmoji: '🍎',
  },

]
let baseConfig = {
  "name": "base",
  "correctSpotEmoji": "🟥",
  "correctLetterEmoji": "🟡",
  "wrongLetterEmoji": "🟦"
}
let customConfig = {
  "name": "Chicks",
  "correctSpotEmoji": "🐣",
  "correctLetterEmoji": "🐤",
  "wrongLetterEmoji": "🥚"
}

const value = ref('')
const transform = computed(() => {
  return [...value.value].map(letter => {
    if (letter === ' ') {
      return ' '
    }
    if (letter === baseConfig.correctSpotEmoji) {
      return customConfig.correctSpotEmoji
    }
    if (letter === baseConfig.correctLetterEmoji) {
      return customConfig.correctLetterEmoji
    }
    if (letter === baseConfig.wrongLetterEmoji) {
      return customConfig.wrongLetterEmoji
    }
    return letter
  }).join('')
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <textarea rows="10" v-model="value"></textarea>
  <textarea rows="10" v-model="transform"></textarea>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

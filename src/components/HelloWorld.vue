<script setup>
import { ref, computed } from 'vue'

defineProps({
  msg: String
})
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

const value = ref('SUTOM #67 3/6🟥🟦🟡🟦🟦🟡🟥🟡🟥🟥🟥🟥🟥🟦🟡🟦🟥🟥🟥🟥🟥🟥🟥🟥')
const transform = computed(() => {
  return [...value.value].map(letter => {
    if (letter === ' ') {
      return ' '
    }
    if (letter === baseConfig.correctSpotEmoji) {
      return customConfig.correctSpotEmoji
    }
    if (letter ===  baseConfig.correctLetterEmoji) {
      return customConfig.correctLetterEmoji
    }
    if (letter ===  baseConfig.wrongLetterEmoji) {
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

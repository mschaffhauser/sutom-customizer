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
  <div style="display: flex; flex-direction: column; min-width: 300px; max-width: 500px; justify-content: center;">
    <label for="paste">colle ton résultat sutom ici</label>
    <p  style="font-size: .6rem">
      exemple:
      <span> 
        <br />SUTOM #67 3/6
        <br />🟥🟦🟡🟦🟦🟡🟥🟡
        <br />🟥🟥🟥🟥🟥🟦🟡🟦
        <br />🟥🟥🟥🟥🟥🟥🟥🟥
      </span>
    </p>
    <textarea id="paste" rows="10" v-model="value"></textarea>
    <br />
    <br />
    <br />
    <label for="copy">copie le superbe résultat ici</label>

    <textarea id="copy" rows="10" v-model="transform"></textarea>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

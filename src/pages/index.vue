<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
const example = ref(null)
// eslint-disable-next-line no-console
console.log(ref.example)
const go = () => {
  // eslint-disable-next-line no-console
  console.log(ref.example.value.value)
}
watchEffect(() => {
  if (value.value)
    // eslint-disable-next-line no-console
    console.log(value.value)

  else
    // eslint-disable-next-line no-console
    console.log(ref.example)
})
const customConfigList = [
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
// eslint-disable-next-line no-console
console.log(customConfigList)
const baseConfig = {
  name: 'base',
  correctSpotEmoji: '🟥',
  correctLetterEmoji: '🟡',
  wrongLetterEmoji: '🟦',
}
const customConfig = {
  name: 'Chicks',
  correctSpotEmoji: '🐣',
  correctLetterEmoji: '🐤',
  wrongLetterEmoji: '🥚',
}

const transform = computed(() => {
  return [...value.value].map((letter) => {
    if (letter === ' ')
      return ' '

    if (letter === baseConfig.correctSpotEmoji)
      return customConfig.correctSpotEmoji

    if (letter === baseConfig.correctLetterEmoji)
      return customConfig.correctLetterEmoji

    if (letter === baseConfig.wrongLetterEmoji)
      return customConfig.wrongLetterEmoji

    return letter
  }).join('')
})
</script>

<template>
  <div>
    <div text-4xl>
      <div inline-block class="i-twemoji-egg active:i-twemoji-front-facing-baby-chick hover:i-twemoji-hatching-chick " />
      <div inline-block class="i-twemoji-egg hover:i-twemoji-front-facing-baby-chick i-twemoji-hatching-chick " />
      <div inline-block class="i-twemoji-front-facing-baby-chick hover:i-twemoji-egg " />
    </div>
    <p>
      Sutom Customizer
    </p>
    <p>
      <em text-sm op75 />
    </p>

    <div py-4 />

    <div>
      <button
        class="m-3 text-sm btn"
        @click="go"
      >
        Example
      </button>
    </div>
    <div>
      <label for="paste">colle ton résultat sutom ici</label>
      <p style="font-size: 1rem">
        exemple:
        <span ref="example" value="ts">
          <br>SUTOM #67 3/6
          <br>🟥🟦🟡🟦🟦🟡🟥🟡
          <br>🟥🟥🟥🟥🟥🟦🟡🟦
          <br>🟥🟥🟥🟥🟥🟥🟥🟥
        </span>
      </p>
      <textarea
        id="paste"
        v-model="value"
        w-100 placeholder="Colle ton résultat ici" rows="10" text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
      />
      <br>
      <br>
      <br>
      <p />
      <textarea
        id="copy"
        v-model="transform"
        w-100 placeholder="copie le superbe résultat ici" rows="10" text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
      />
    </div>
  </div>
</template>

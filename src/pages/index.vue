<!-- eslint-disable no-console -->
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
const example = ref(null)
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
  return [...value.value]
    .map((letter) => {
      if (letter === ' ')
        return ' '

      if (letter === baseConfig.correctSpotEmoji)
        return customConfig.correctSpotEmoji

      if (letter === baseConfig.correctLetterEmoji)
        return customConfig.correctLetterEmoji

      if (letter === baseConfig.wrongLetterEmoji)
        return customConfig.wrongLetterEmoji

      return letter
    })
    .join('')
})
function copyToClipboard(text: string) {
  navigator.clipboard.writeText(transform.value)
}
function pasteToClipboard() {
  navigator.clipboard.readText().then(text => (value.value = text))
}
function copyPasteExample() {
  document.querySelectorAll('.open_grepper_editor').forEach(el => el.remove())
  const pre = document.getElementById('exemple')?.innerHTML || ''
  value.value = pre
}
</script>

<template>
  <div>
    <div text-4xl>
      <div
        inline-block
        class="i-twemoji-egg active:i-twemoji-front-facing-baby-chick hover:i-twemoji-hatching-chick"
      />
      <div
        inline-block
        class="i-twemoji-egg hover:i-twemoji-front-facing-baby-chick i-twemoji-hatching-chick"
      />
      <div inline-block class="i-twemoji-front-facing-baby-chick hover:i-twemoji-egg" />
    </div>
    <p>Sutom Customizer</p>
    <p>
      <em text-sm op75 />
    </p>

    <div py-4 />

    <div flex justify-center>
      <button class="m-3 text-sm btn" @click="pasteToClipboard()">
        Coller
      </button>
      <button class="m-3 text-sm btn-secondary" @click="copyPasteExample()">
        Essayer l'exemple
      </button>
    </div>
    <div>
      <pre id="exemple" class="hidden">
SUTOM #67 3/6
🟥🟦🟡🟦🟦🟡🟥🟡
🟥🟥🟥🟥🟥🟦🟡🟦
🟥🟥🟥🟥🟥🟥🟥🟥</pre>
      <textarea
        id="paste"
        v-model="value"
        w-100
        placeholder="Colle ton résultat ici"
        rows="10"
        text="center"
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
        w-100
        placeholder="Copie le superbe résultat ici"
        rows="10"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
      />
      <p />
      <button class="m-3 text-sm btn-green" @click="copyToClipboard(transform)">
        Copier
      </button>
    </div>
  </div>
</template>

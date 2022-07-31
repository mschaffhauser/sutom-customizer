<!-- eslint-disable no-console -->
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
const selected = ref('chicks')
const configList = [
  {
    name: 'chicks',
    correctSpotEmoji: '🐣',
    correctLetterEmoji: '🐤',
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
console.log(configList)
const baseConfig = {
  name: 'base',
  correctSpotEmoji: '🟥',
  correctLetterEmoji: '🟡',
  wrongLetterEmoji: '🟦',
}
const customConfig = computed(() => {
  return configList.find(config => config.name === selected.value) || configList[0]
})
const customConfigText = computed(() => {
  return `${`${customConfig.value.correctSpotEmoji}&nbsp;${customConfig.value.correctLetterEmoji}`}&nbsp;${customConfig.value.wrongLetterEmoji}`
})

const transform = computed(() => {
  return [...value.value]
    .map((letter) => {
      if (letter === ' ')
        return ' '

      if (letter === baseConfig.correctSpotEmoji)
        return customConfig.value.correctSpotEmoji || '🟥'

      if (letter === baseConfig.correctLetterEmoji)
        return customConfig.value.correctLetterEmoji || '🟥'

      if (letter === baseConfig.wrongLetterEmoji)
        return customConfig.value.wrongLetterEmoji || '🟦'

      return letter
    })
    .join('')
})
function copyToClipboard(text: string) {
  navigator.clipboard.writeText(transform.value)
}
function pasteToClipboard() {
  console.log(customConfig)
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
    <div />
    <h1 text-2xl>
      Sutom Customizer
    </h1>
    <p>
      <span mx-1 mt-3 text-xl flex justify-center items-center>🟥 🟡 🟦 <i class="mx-2 block i-carbon-arrow-right" />  <span v-html="customConfigText" /></span>
    </p>
    <SelectConfig v-model:selected="selected" class="flex flex-col items-center" text="Choisie ta configuration" />
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
        w="250px"
        h="120px"
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
        :disabled="!value"
        w="250px"
        h="120px"
        :class="!value ? 'op50' : ''"
        placeholder="Copie le superbe résultat ici"
        rows="10"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
      />
      <p />
      <button :disabled="!value" :class="!value ? 'disabled' : ''" m-3 text-sm btn-green @click="copyToClipboard(transform)">
        Copier
      </button>
      <button v-if="supportShare()" class="m-3 text-sm btn-green" @click="startShare(transform)">
        Partager
      </button>
      <div v-if="value && customConfig.name === 'chicks'" text-xl m-auto i-twemoji-egg hover:i-twemoji-hatching-chick />
    </div>
  </div>
</template>

<style scoped lang="scss">
.disabled {
pointer-events: none;
}
</style>

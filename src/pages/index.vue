<!-- eslint-disable no-console -->
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import customConfigList from './../../json/config-emoji.json'
const value: Ref<string> = ref('')
const creditMe: Ref<boolean> = ref(false)
const selected: Ref<string> = ref('Chicks!')
const isFirefox: Ref<boolean> = ref(navigator.userAgent.includes('Firefox'))

const baseConfig: { [key: string]: string } = {
  name: 'base',
  wrongLetterEmoji: '🟦',
  correctLetterEmoji: '🟡',
  correctEmoji: '🟥',
}
const customConfig = computed<{ [key: string]: string }>(() => {
  return customConfigList.find(config => config.name === selected.value) || customConfigList[0]
})
const customConfigText = computed<string>(() => {
  return `${`${customConfig.value.correctEmoji}&nbsp;${customConfig.value.correctLetterEmoji}`}&nbsp;${customConfig.value.wrongLetterEmoji}`
})

const transform = computed<string>(() => {
  const newContent = [...value.value]
    .map((letter) => {
      if (letter === ' ')
        return ' '

      if (letter === baseConfig.correctEmoji)
        return customConfig.value.correctEmoji || '🟥'

      if (letter === baseConfig.correctLetterEmoji)
        return customConfig.value.correctLetterEmoji || '🟡'

      if (letter === baseConfig.wrongLetterEmoji)
        return customConfig.value.wrongLetterEmoji || '🟦'

      return letter
    })
    .join('')

  if (creditMe.value) {
    if (newContent.includes('sutom.nocle.fr'))
      return newContent.replace('sutom.nocle.fr', 'mschaffhauser.github.io/sutom-customizer')
    else
      return `${newContent} https://mschaffhauser.github.io/sutom-customizer/`
  }
  return newContent
})
function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
}
function pasteToClipboard() {
  console.log(navigator.clipboard.readText())
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
    <SelectConfig v-model:selected="selected" class="flex flex-col items-center" text="Choisis ta configuration" />
    <div py-4 />

    <div flex justify-center>
      <button :disabled="isFirefox" class="m-3 text-sm btn" @click="pasteToClipboard()">
        Coller <span v-if="isFirefox">(not supported on Firefox)</span>
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
🟥🟥🟥🟥🟥🟥🟥🟥
</pre>
      <textarea
        id="paste"
        v-model="value"
        w="250px"
        h="150px"
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
        h="150px"
        :class="!value ? 'op50' : ''"
        placeholder="Copie le superbe résultat ici"
        rows="10"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
      />
      <p />
      <p><input v-model="creditMe" class="mr-2" type="checkbox">Partage l'url de ce site</p>
      <button :disabled="!value" :class="!value ? 'disabled' : ''" m-3 text-sm btn-green @click="copyToClipboard(transform)">
        Copier
      </button>
      <button v-if="supportShare()" class="m-3 text-sm btn-green" @click="startShare(transform)">
        Partager
      </button>
      <div v-if="value && customConfig.name === 'Chicks!'" text-xl m-auto i-twemoji-egg hover:i-twemoji-hatching-chick />
    </div>
  </div>
</template>

<style scoped lang="scss">
.disabled {
pointer-events: none;
}
</style>

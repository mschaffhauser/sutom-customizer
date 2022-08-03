<!-- eslint-disable no-console -->
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import configList from '../../json/config-emoji-jetpulp.json'
const value: Ref<string> = ref('')
const creditMe: Ref<boolean> = ref(false)
const selected: Ref<string> = ref('Suzi')
const isFirefox: Ref<boolean> = ref(navigator.userAgent.includes('Firefox'))

const baseConfig: { [key: string]: string } = {
  name: 'base',
  wrongLetterEmoji: '🟦',
  correctLetterEmoji: '🟡',
  correctEmoji: '🟥',
}
const config = computed<{ [key: string]: string }>(() => {
  return configList.find(config => config.name === selected.value) || configList[0]
})
const configText = computed<string>(() => {
  return `${`${config.value.correctEmoji}&nbsp;${config.value.correctLetterEmoji}`}&nbsp;${config.value.wrongLetterEmoji}`
})

const configWithSlack = computed<boolean>(() => {
  return 'correctEmojiSlack' in config.value || 'correctLetterEmojiSlack' in config.value || 'wrongLetterEmojiSlack' in config.value
})
const result = computed<string>(() => {
  const newContent = [...value.value]
    .map((letter) => {
      if (letter === ' ')
        return ' '

      if (letter === baseConfig.correctEmoji)
        return config.value.correctEmoji || '🟥'

      if (letter === baseConfig.correctLetterEmoji)
        return config.value.correctLetterEmoji || '🟡'

      if (letter === baseConfig.wrongLetterEmoji)
        return config.value.wrongLetterEmoji || '🟦'

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
const resultWithSlackIcone = computed<string>(() => {
  if (configWithSlack.value)
    return result
  return [...result.value]
    .map((letter) => {
      if (letter === ' ')
        return ' '

      if (config.value.correctEmojiSlack && letter === config.value.correctEmoji)
        return config.value.correctEmojiSlack

      if (config.value.correctLetterEmojiSlack && letter === config.value.correctLetterEmoji)
        return config.value.correctLetterEmojiSlack

      if (config.value.wrongLetterEmojiSlack && letter === config.value.wrongLetterEmoji)
        return config.value.wrongLetterEmojiSlack

      return letter
    })
    .join('')
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
      <span mx-1 mt-3 text-xl flex justify-center items-center>🟥 🟡 🟦 <i class="mx-2 block i-carbon-arrow-right" />  <span v-html="configText" /></span>
    </p>
    <SelectConfig v-model:selected="selected" :config-list="configList" class="flex flex-col items-center" text="Choisis ta configuration" />
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
        v-model="result"
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
      <button v-if="configWithSlack" :disabled="!value" :class="!value ? 'disabled' : ''" m-3 text-sm btn-jetpulp @click="copyToClipboard(resultWithSlackIcone)">
        Copier avec les émojis de Slack
      </button>
      <p />
      <div inline-block>
        <button :disabled="!value" :class="!value ? 'disabled' : ''" m-3 text-sm btn-green @click="copyToClipboard(resultWithSlackIcone)">
          Copier <span v-if="configWithSlack">
            les émojis de base
          </span>
        </button>
        <button v-if="supportShare()" :disabled="!value" class="m-3 text-sm btn-green" @click="startShare(resultWithSlackIcone)">
          Partager
        </button>
      </div>

      <div v-if="value && config.name === 'Chicks!'" text-xl m-auto i-twemoji-egg hover:i-twemoji-hatching-chick />
    </div>
  </div>
</template>

<style scoped lang="scss">
.disabled {
pointer-events: none;
}
</style>

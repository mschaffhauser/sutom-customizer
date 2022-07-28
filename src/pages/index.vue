<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
const value = ref('')

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
const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        btn m-3 text-sm
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
    <div style="display: flex; flex-direction: column; min-width: 300px; max-width: 500px; justify-content: center;">
      <label for="paste">colle ton résultat sutom ici</label>
      <p style="font-size: .6rem">
        exemple:
        <span>
          <br>SUTOM #67 3/6
          <br>🟥🟦🟡🟦🟦🟡🟥🟡
          <br>🟥🟥🟥🟥🟥🟦🟡🟦
          <br>🟥🟥🟥🟥🟥🟥🟥🟥
        </span>
      </p>
      <textarea id="paste" v-model="value" rows="10" />
      <br>
      <br>
      <br>
      <label for="copy">copie le superbe résultat ici</label>

      <textarea id="copy" v-model="transform" rows="10" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

# SUTOM customizer WIP

A little site to change the emoji of [sutom](https://sutom.nocle.fr/) results

![alt text](./assets/capture.png)
It's a work in progress (not the cleanest repo 😔)

### The diffenrents config

```javascript
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
```

## Demo

https://mschaffhauser.github.io/sutom-customizer/


# Theme [Vitesse-lite](https://github.com/antfu/vitesse-lite)
## Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)



<h6 align='center' style='font-size:1.5rem'>
with
</h6>
<p align='center'>
  <img src='https://user-images.githubusercontent.com/11247099/111864893-a457fd00-899e-11eb-9f05-f4b88987541d.png' alt='Vitesse - Opinionated Vite Starter Template' width='600'/>
</p>

<h6 align='center'>
<a href="https://vitesse-lite.netlify.app/">Live Demo</a>
</h6>

<h5 align='center'>
<b>Lightweight version of <a href="https://github.com/antfu/vitesse">Vitesse</a></b>
</h5>

<br>

<p align='center'>
<b>English</b> | <a href="https://github.com/antfu/vitesse-lite/blob/main/README.zh-CN.md">简体中文</a>
<!-- Contributors: Thanks for geting interested, however we DON'T accept new transitions to the README, thanks. -->
</p>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing

- 🦾 TypeScript, of course

- ☁️ Deploy on Netlify, zero-config


<br>
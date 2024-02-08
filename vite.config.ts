/// <reference types="vitest" />

import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import { VitePWA } from 'vite-plugin-pwa'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
//import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue'],
      dts: 'src/typed-router.d.ts',
    }),
	//Pages(),
	Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
		'@vueuse/head',
        '@vueuse/core',
		//'@vueuse/integrations',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
		'./src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
	  //extensions: ['vue'],
      //include: [/\.vue$/, /\.vue\?vue/],
      dts: true, //'src/components.d.ts',
	  //dirs: [
	  //'src/components',
      //],
      resolvers: [
        PrimeVueResolver({
          importTheme: "lara-light-blue",
        }),
      ],
    }),
	VitePWA({
      registerType: 'autoUpdate',
	}),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    //UnoCSS(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})

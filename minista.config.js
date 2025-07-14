import { defineConfig } from 'minista'
import path from 'path'

/**
 * @see https://minista.qranoko.jp/docs/config-file
 */
export default defineConfig({
  // Корень проекта (обычно не меняется)
  root: '',

  // Базовый путь (если деплой не в корень сайта, поменяй)
  base: '/',

  // Папка с публичными файлами (копируются как есть)
  public: 'public',

  // Папка для сборки (туда складывается результат)
  out: 'dist',

  assets: {
    // Общая папка для ассетов (шрифты, иконки, картинки, скрипты)
    outDir: 'assets',
    outName: '[name]',

    // Картинки (оптимизируются и ресайзятся при сборке)
    images: {
      outDir: 'assets/images',
      outName: '[name]',
      remoteName: 'remote',
      optimize: {
        layout: 'constrained',
        breakpoints: [
          360, 400, 640, 800, 1024, 1280, 1440, 1920, 2560, 2880, 3840,
        ],
        resolution: [1, 2],
      },
    },

    // Поддержка импорта SVG как React/JSX-компонентов
    svgr: {
      svgrOptions: {},
    },

    // SVG-спрайт из папки с иконками
    icons: {
      srcDir: 'src/assets/icons',
      outDir: 'assets/images',
      outName: '[dirname]',
      svgstoreOptions: {
        // Удаляем fill/stroke из символов, чтобы управлять цветом через CSS
        cleanSymbols: ['fill', 'stroke'],
      },
    },

    // Шрифты (woff2 и пр.)
    fonts: {
      outDir: 'assets/fonts',
      outName: '[name]',
    },

    // Имя основного бандла
    bundle: {
      outName: 'bundle',
    },
  },

  resolve: {
    // Настройка алиаса @/ → src/
    alias: [
      {
        find: '@/',
        replacement: path.resolve('src') + '/',
      },
    ],
  },

  css: {
    modules: {
      // Поведение CSS-модулей (используется редко, но пусть будет)
      scopeBehaviour: 'local',
      globalModulePaths: [],
      generateScopedName: undefined,
      hashPrefix: '',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        // Автоматически подключаем helpers во все SCSS-файлы
        additionalData: `
          @use '@/styles/helpers' as *;
        `,
        // Убираем варнинги от старого API
        silenceDeprecations: ['legacy-js-api'],
      },
      less: {},
      stylus: {},
    },
  },

  // Можно прокинуть дополнительные опции в Vite
  vite: {},
})

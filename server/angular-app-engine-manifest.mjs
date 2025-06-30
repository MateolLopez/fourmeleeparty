
export default {
  basePath: 'https://mateollopez.github.io/fourmeleeparty',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://mateollopez.github.io/fourmeleeparty/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/fourmeleeparty"
  },
  {
    "renderMode": 2,
    "route": "/fourmeleeparty/npcs"
  },
  {
    "renderMode": 2,
    "route": "/fourmeleeparty/bitacora"
  },
  {
    "renderMode": 2,
    "route": "/fourmeleeparty/dioses"
  },
  {
    "renderMode": 2,
    "route": "/fourmeleeparty/mapa"
  },
  {
    "renderMode": 2,
    "route": "/fourmeleeparty/random-dios"
  },
  {
    "renderMode": 2,
    "route": "/fourmeleeparty/cartas"
  },
  {
    "renderMode": 2,
    "route": "/fourmeleeparty/dm"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4353, hash: 'bf1efcb7813631808cc1d8df52c2ac5ddcaebd795acac0e12df232b76ba17002', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: '65c7b72a4ebed5873685f30de97b25e76d035aebd1dd87c1286cc7633c040938', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'mapa/index.html': {size: 9516, hash: '0c77b74f1f20d956aaf813c424d6c38d0c494d03d6be3028d7781ce69c6d6edd', text: () => import('./assets-chunks/mapa_index_html.mjs').then(m => m.default)},
    'dm/index.html': {size: 7921, hash: '769aca9fbb56763fca7bec87476e803e2707388350f27ab0258549b98f8b585c', text: () => import('./assets-chunks/dm_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7341, hash: 'd52fffb486d6ae4bd3ed601073e9de2350ad4e58d127efb833f62339278d4347', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dioses/index.html': {size: 11845, hash: '7bab50cd9ab58047f8044ff6c270a699acb9dba16318644a7314addbf8909f60', text: () => import('./assets-chunks/dioses_index_html.mjs').then(m => m.default)},
    'random-dios/index.html': {size: 9976, hash: '74e086c1b72e1c79f586233d90414a0f01c8d757895c7b8526fd648d595271f9', text: () => import('./assets-chunks/random-dios_index_html.mjs').then(m => m.default)},
    'cartas/index.html': {size: 10754, hash: '13a7a6ef3b398eb56ad4a90a3082b39b8c2f3e08e3c23fde77c4d96c88d75aee', text: () => import('./assets-chunks/cartas_index_html.mjs').then(m => m.default)},
    'bitacora/index.html': {size: 12048, hash: '49227ebfe4080159b26a3b0356c9bc9b01c7eb4d61b799802b9e6df3cc699dff', text: () => import('./assets-chunks/bitacora_index_html.mjs').then(m => m.default)},
    'npcs/index.html': {size: 8304, hash: '48326361d75023d7fbcaeaf25b416f8cc22a493e80824f2c27d1cf21129c7478', text: () => import('./assets-chunks/npcs_index_html.mjs').then(m => m.default)},
    'styles-ECCNQKGN.css': {size: 12022, hash: '7n0FML27rrQ', text: () => import('./assets-chunks/styles-ECCNQKGN_css.mjs').then(m => m.default)}
  },
};

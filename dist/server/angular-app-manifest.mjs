
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/*"
  },
  {
    "renderMode": 0,
    "route": "/*/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XVLAR6SA.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TY3GSYCU.js"
    ],
    "route": "/*/set-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MMPLMLGL.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QXCC4HIE.js"
    ],
    "route": "/*/reset-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TSP3FWXM.js"
    ],
    "route": "/*/claims-info"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ICPT72JW.js"
    ],
    "route": "/*/forgot-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-72ZHH6IR.js",
      "chunk-SLEZ27HO.js"
    ],
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-G2LU7G36.js",
      "chunk-SLEZ27HO.js"
    ],
    "route": "/*/profile/edit-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OA3USQRX.js",
      "chunk-MJRTCEAG.js",
      "chunk-BNBDVSVS.js",
      "chunk-2B26AOEX.js"
    ],
    "route": "/*/medical-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RQ57P7MH.js",
      "chunk-BNBDVSVS.js",
      "chunk-2B26AOEX.js"
    ],
    "route": "/*/motor-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OGAUPACH.js"
    ],
    "route": "/*/claims"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WQTTHH3T.js"
    ],
    "route": "/*/claims/*/*/comments"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7FSW42ZP.js",
      "chunk-MJRTCEAG.js",
      "chunk-BNBDVSVS.js",
      "chunk-2B26AOEX.js"
    ],
    "route": "/*/building-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EFXTJJX3.js",
      "chunk-MJRTCEAG.js",
      "chunk-BNBDVSVS.js",
      "chunk-2B26AOEX.js"
    ],
    "route": "/*/job-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XWEWSTKW.js"
    ],
    "route": "/*/contact"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OFKTBJOJ.js",
      "chunk-2B26AOEX.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ENZ5RKC6.js"
    ],
    "route": "/*/about"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JWEVLJBW.js"
    ],
    "route": "/*/policies"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IDZLIFJT.js"
    ],
    "route": "/*/policies/*/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2Q6TFMZ2.js",
      "chunk-MQZO7NGL.js"
    ],
    "route": "/*/policies/*/*/corporate-details"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AN23WHVH.js",
      "chunk-MQZO7NGL.js"
    ],
    "route": "/*/policies/*/*/corporate-details/add"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LVTDCM5H.js"
    ],
    "route": "/*/policies/*/*/comments"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LNY3K3BI.js",
      "chunk-2B26AOEX.js"
    ],
    "route": "/*/blog/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MZWE7TEN.js",
      "chunk-7CBK3EL4.js"
    ],
    "route": "/*/english-blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6J4CB6SM.js"
    ],
    "route": "/*/notifications"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XJIEPJAJ.js",
      "chunk-7CBK3EL4.js"
    ],
    "route": "/*/arabic-blogs"
  },
  {
    "renderMode": 0,
    "redirectTo": "/*/login",
    "route": "/*/logout"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15530, hash: '2c74837a89cfa4f7b45ceb0517c5edd5b8f96ef2e0dc2e77954927435454b469', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4047, hash: 'a51e1440ac58007581a1ee5c87a92dca2b2ff9a9f09b09a8c6e9f025fc75994b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5O2P34SF.css': {size: 118722, hash: 'oog9kb8YlTg', text: () => import('./assets-chunks/styles-5O2P34SF_css.mjs').then(m => m.default)}
  },
};

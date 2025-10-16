
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
      "chunk-CJDDBUCV.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OVAVZZXZ.js"
    ],
    "route": "/*/set-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LGCRN4VP.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4IEOO6WO.js"
    ],
    "route": "/*/reset-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CHJL7S7J.js"
    ],
    "route": "/*/claims-info"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VHGV7JTQ.js"
    ],
    "route": "/*/forgot-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6FWHDU3J.js",
      "chunk-NGJI7CA6.js"
    ],
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LDJWUJOU.js",
      "chunk-NGJI7CA6.js"
    ],
    "route": "/*/profile/edit-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NFIGCFAL.js",
      "chunk-EOU5VZPV.js",
      "chunk-YPJ5JHJQ.js",
      "chunk-TJ6EZ3DK.js"
    ],
    "route": "/*/medical-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NMC7JWHG.js",
      "chunk-YPJ5JHJQ.js",
      "chunk-TJ6EZ3DK.js"
    ],
    "route": "/*/motor-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VEGFQTY7.js"
    ],
    "route": "/*/claims"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CNH2VM7A.js"
    ],
    "route": "/*/claims/*/*/comments"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UIB6SXEC.js",
      "chunk-EOU5VZPV.js",
      "chunk-YPJ5JHJQ.js",
      "chunk-TJ6EZ3DK.js"
    ],
    "route": "/*/building-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JTKQKSVP.js",
      "chunk-EOU5VZPV.js",
      "chunk-YPJ5JHJQ.js",
      "chunk-TJ6EZ3DK.js"
    ],
    "route": "/*/job-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YTOD4CZK.js"
    ],
    "route": "/*/contact"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EL2DBN75.js",
      "chunk-TJ6EZ3DK.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5HXXA5KS.js"
    ],
    "route": "/*/about"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4JVZKIUF.js"
    ],
    "route": "/*/policies"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KYNCCEEL.js"
    ],
    "route": "/*/policies/*/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DZLA4OYR.js",
      "chunk-K6A2BCV5.js"
    ],
    "route": "/*/policies/*/*/corporate-details"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-H3Q4GH33.js",
      "chunk-K6A2BCV5.js"
    ],
    "route": "/*/policies/*/*/corporate-details/add"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7VEGZ7LS.js"
    ],
    "route": "/*/policies/*/*/comments"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q4DCMHT5.js",
      "chunk-TJ6EZ3DK.js"
    ],
    "route": "/*/blog/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZHMEF6SH.js",
      "chunk-XHVKANXM.js"
    ],
    "route": "/*/english-blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DD52RATJ.js"
    ],
    "route": "/*/notifications"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KYQJPKDX.js",
      "chunk-XHVKANXM.js"
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
    'index.csr.html': {size: 15618, hash: '1c429295b5a2619de0cb7abf28d0982a9c4ab5f17a63e1bd9a1bddc99b5e5e5e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4135, hash: '5dd26f206263a87150cd3143e5927dcb7834c60a2735852653625f869c6217a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ICLXQRXH.css': {size: 118745, hash: 'hqXMByTGd28', text: () => import('./assets-chunks/styles-ICLXQRXH_css.mjs').then(m => m.default)}
  },
};

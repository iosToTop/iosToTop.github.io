'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b291c9014c1f9a47cab7a106833b820a",
"index.html": "cf05ef091b9e5775bcda7d2c63cbb4d5",
"/": "cf05ef091b9e5775bcda7d2c63cbb4d5",
"main.dart.js": "c5690b7960ac5c660acb87d5a7eda45c",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7328e4b59cb473fd99b687a4d9564955",
".git/config": "7db0731c754753c75559569491689e84",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/66/e966dc4f5959632f26224dacd36144b3ccd991": "74457ce265ef9791d92cfe95451d2af5",
".git/objects/3b/ec123cbbc356b0730e13806570575c6f53bb82": "0c7606339f583e11c75283d133cd7e06",
".git/objects/9b/c141798a8891148d72bbdf6549d47fe44258f6": "cf1e7db45ed2fb3c346d299247f17ff8",
".git/objects/9e/359167c1e8519a3b8ca390495158bcfec09300": "052776fab64f8794835c7f7b6b540afc",
".git/objects/04/220f96e92e1b4c2bd4749f9c3a1afe78515769": "983b1122c6fb687023671532b0e378c2",
".git/objects/56/0e9679bcfc538e9044d7ec47ccdc3bb042f033": "54db886a30dce276555d27326b7782bf",
".git/objects/67/dccc8c7c52ac71c57abe6e765e012c58c74630": "48303edea77d8a7caa21c7e7953f23c9",
".git/objects/93/d828ee979aa9639863895d255a80fb0d8b2c45": "b84bc1fddc023806a1a18892f5756b74",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/d9/679696ed08f65c6bfbc1c552da33cdc8224433": "0b80adc28b5125e1f4e6f2494cff0f92",
".git/objects/be/60e14b8423f17182c67cb4c658b87896d85bdf": "e5a9adda5d6db660f2efa031fb1a1113",
".git/objects/b3/9fcfb0b067b5c6ee281c8ee0672bb4f61c0408": "6fec6219b598ea40d01bb72bd888f7ab",
".git/objects/b3/f3e071fd14c993086426857e7b048ed683ffe2": "ecb854ba1846c0e0625983f060cf84da",
".git/objects/d1/ad4014d7e066ced5ef8f3d598f54ff69953b41": "d6c0048c6bbbb7961df3e80df9c9a201",
".git/objects/d1/d9f919852f4cd0c26437d498265af3a485ea75": "6b21c4efdca7409a6c0bc83a8c4b1dd5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/4ba5ceeebe4677aabfc18884b088f16044d847": "7db1c081cc8d5594d004961d104b8dc1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/700b551d6bc585b38a42d6d061f10561006316": "5f6d038e19653e16ae10335369de4f1a",
".git/objects/fc/56e7819329b5f04e43ced4f3b133ca726dd385": "519716864ef5007d7e6b5e424c3c6efe",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/16/b971528950fcbb1ac6f693b8e58eedd2531e24": "5830171e555d01f74d91c4264db9ac4f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/76b8f2ed53ca9582d0390d719d74ca00235d7d": "2c9d1d7b6648989078434e6b968c7ffd",
".git/objects/5c/e5b4937293e689039766b0ad006777fe0640f9": "f10ae52d8ea3b67f91c6637d6d3ba976",
".git/objects/98/e26cd2d7723e6bee1823eb9df1d966c2124026": "ef3cba741e6cc43df55b229c4261a962",
".git/objects/52/83f6d57747bc00804dda0e0ff5e47bc3207cc7": "1b1f6d0845fe23ee3fcab9c89e87e807",
".git/objects/90/1e696a7400b1bb8fd8f1765be54ccab0132fcd": "ce56fb11d5ae0afcd3bbd5dbb11e9cdc",
".git/objects/aa/2e5ab971e5c305c0632b6b8a8d5f83763f141a": "dabb4bb47e797ac47811d2d8c3243ee1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/a4f5ef9c5ba5580b897cf7d61a3b7c25eca196": "676be6decc3ee32f8e91e8cd5b3a77b0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/c2/0261637cc5be8b804f9b8f6ba74d808b34e7b0": "cedfcff198f1dc9450e0bcc72a8cded1",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f8/87760558a77e34968e95a124115e9a3e00945d": "fc046ca67740409a481e3d8813717e34",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/3f3261ab3dbe40fe949edd8a23f5ebc0b66a79": "88c77299fb2308931dc615b146b89858",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/40/621cc43116f60f25532fa6748e1dd4b9f1ef7d": "cf9f48db5f2ad7324fca465e7c46b78c",
".git/objects/7f/12c5a452fb5a95e768629ff28c5dedf2544ee8": "93fcdb4d1dec81fa229d2b5a68d3a3cf",
".git/objects/7a/50db606551ba73c9792e739e57285e0a8aab3f": "af20fcbed7fc4e20ac0369dfb259d408",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f39be5ed4624bf57cf633cc7050fba13",
".git/logs/refs/heads/master": "f39be5ed4624bf57cf633cc7050fba13",
".git/logs/refs/remotes/origin/master": "39040864e68c576f844b18cf83b74d77",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "0eaa7202391a9decf66694396b8b83d2",
".git/refs/remotes/origin/master": "0eaa7202391a9decf66694396b8b83d2",
".git/index": "1774269001b3962ea8264a3a993e2383",
".git/COMMIT_EDITMSG": "47932a4979e2df2cf2013f3cb4f8fa0a",
"assets/AssetManifest.json": "8b64ca403a11d6289750a6adba7e1d8f",
"assets/NOTICES": "7fc585f9ba5914be7d9ee68f6efff5b3",
"assets/image/login_phone.png": "309b71b96773ab48709533eab97cb499",
"assets/image/gray_close.png": "e5f6a2497c996377534c2294004beb7b",
"assets/image/more_white.png": "e27a3024da8ff38f0a056fba51272b19",
"assets/image/navi_back_black.png": "b9602ae451b6979db78499e35ce337b3",
"assets/image/login_pwd.png": "4cffd396ebabad41f7da37527836b0c6",
"assets/image/logo.png": "205b44a8f859c1bc366c3ad4762ee346",
"assets/image/more_black.png": "12fddd2f0e2474361abaf3b01923e90c",
"assets/image/circle_left.png": "7922fbad1cd14a8929e8c4e603cc563f",
"assets/image/circle_right.png": "e07138eec55ea39cc8d4cc60f186ea12",
"assets/image/page_back.png": "8a0f26b6078462432cc95d356e9d21f7",
"assets/image/circle_input.png": "a632b2c6fab9f3b8667e0b042622ad64",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "56606fe1a09d4ff8a2cac18771828f44",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

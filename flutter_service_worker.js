'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ec77a4b0b79c28418334e8d0e8e8e73a",
"assets/assets/Activties%2520(0).jpg": "832f0d9534908168c2a2dc943e53770f",
"assets/assets/Activties%2520(1).jpg": "fa05f4c6f00509d1d0f41d9cca679bcb",
"assets/assets/Activties%2520(10).jpg": "b9ab52e69d5a8208d19228966b825ac7",
"assets/assets/Activties%2520(11).jpg": "2afe37ad7ff54d56fde96914df04f644",
"assets/assets/Activties%2520(12).jpg": "954d0f64c606027625365894c030f8b1",
"assets/assets/Activties%2520(13).jpg": "e9c94e06773d5281bd650fd336ba03b7",
"assets/assets/Activties%2520(14).jpg": "2caf57f50cdb6f056531ddec71026a68",
"assets/assets/Activties%2520(15).jpg": "c66f97494ad8fce067e3b206a7dfd3b2",
"assets/assets/Activties%2520(16).jpg": "9143cdb6e64f54c8ddc9c38a1fdcb1ac",
"assets/assets/Activties%2520(17).jpg": "edd812c6a21df1a22d8f226ba1cbb040",
"assets/assets/Activties%2520(18).jpg": "1c39a04285a1e545d7b56425c012e5de",
"assets/assets/Activties%2520(19).jpg": "3e8d7151b529c555617346993ba26ec1",
"assets/assets/Activties%2520(2).jpg": "31fe8909fb27a1fd20c9faecd3e2048c",
"assets/assets/Activties%2520(20).jpg": "4738280036caf90a33698a097d8cd50d",
"assets/assets/Activties%2520(21).jpg": "4964da275ccbfc02a0b77e0ddf0ec416",
"assets/assets/Activties%2520(22).jpg": "4964da275ccbfc02a0b77e0ddf0ec416",
"assets/assets/Activties%2520(23).jpg": "96e922f9fec7ff85043b13be6500f20e",
"assets/assets/Activties%2520(24).jpg": "c0cba8e2cf78eb299c5ec459fad025ce",
"assets/assets/Activties%2520(25).jpg": "14a484baa8589e1683eac3a74f613071",
"assets/assets/Activties%2520(26).jpg": "e36639b4675eb09ff4bab4f76f8301ab",
"assets/assets/Activties%2520(27).jpg": "f63384c66a0e867ede377c8f465c51e7",
"assets/assets/Activties%2520(28).jpg": "1c3283b8da572e4f0f6292253f9bc8b2",
"assets/assets/Activties%2520(29).jpg": "c57f0fa2b27f14e9bc1cf7425f8a0714",
"assets/assets/Activties%2520(3).jpg": "1791bcbf0eab5833ba9707e38ced2283",
"assets/assets/Activties%2520(30).jpg": "9c41ebe62aa6b20d2ab377504728f354",
"assets/assets/Activties%2520(31).jpg": "e41ea536ac091006970caca828166b20",
"assets/assets/Activties%2520(32).jpg": "e41ea536ac091006970caca828166b20",
"assets/assets/Activties%2520(33).jpg": "873a65663f9a93a060a6533250a8a001",
"assets/assets/Activties%2520(34).jpg": "4af3c99f41c03ad3367faff5d8c8c0f9",
"assets/assets/Activties%2520(35).jpg": "6e61594bf0a94b3193e757933c397073",
"assets/assets/Activties%2520(36).jpg": "58b7b369e405706509db5c0eb324d94e",
"assets/assets/Activties%2520(37).jpg": "b545e168ef13138cb7abbd0de2b61ec5",
"assets/assets/Activties%2520(38).jpg": "8900f20693069bd2c36180d759034144",
"assets/assets/Activties%2520(39).jpg": "fa5920396b475e5a96ad9dcb8ed8a851",
"assets/assets/Activties%2520(4).jpg": "0d28098aa292c201b23f7e893196c8d7",
"assets/assets/Activties%2520(40).jpg": "620d5d8db2a1e0ccfe7fce4bdbc052bb",
"assets/assets/Activties%2520(41).jpg": "d9d08f11f64be1b2f30b0ff424716540",
"assets/assets/Activties%2520(42).jpg": "809945b8a1f6d834d7aeac190f601337",
"assets/assets/Activties%2520(43).jpg": "3dc028cbac1a0cfc3565b57b2da358ad",
"assets/assets/Activties%2520(44).jpg": "35ded0fdea41ff948fe9ca939799094b",
"assets/assets/Activties%2520(45).jpg": "d7a393bcc317d9410f0caef8816ed07b",
"assets/assets/Activties%2520(46).jpg": "9865d0ae7c04723afdc3ada64ccf6c93",
"assets/assets/Activties%2520(47).jpg": "67ac043cbc03a32512005a8f8ba0df3e",
"assets/assets/Activties%2520(48).jpg": "52343c0d041b759d48d65784cf7a629f",
"assets/assets/Activties%2520(49).jpg": "6260b944265fda770a74019abecefcd1",
"assets/assets/Activties%2520(5).jpg": "305fec4232b04b496c8c6eb11c91870b",
"assets/assets/Activties%2520(50).jpg": "dc195de88aa86fde57ba5d10cf8bc42a",
"assets/assets/Activties%2520(51).jpg": "c26f6f200bb09d816b478858b4d70e63",
"assets/assets/Activties%2520(52).jpg": "a411b0ccb89494366d2e5c48b384cff9",
"assets/assets/Activties%2520(53).jpg": "543c1f5da8da8484dcccc7e5eec7b721",
"assets/assets/Activties%2520(54).jpg": "33d28b5417db858199d9b526038673c3",
"assets/assets/Activties%2520(55).jpg": "39ac1a6c26f5dec2425eba855eedcf0b",
"assets/assets/Activties%2520(56).jpg": "91eb4eed4a02166ad41da18c16aa7351",
"assets/assets/Activties%2520(57).jpg": "6a568253ed26b487aa53e0e93b3d37fd",
"assets/assets/Activties%2520(58).jpg": "0b3c056a21308e2229432e13bf1d1305",
"assets/assets/Activties%2520(59).jpg": "4b76dc20c1ac6db833b6e8366f6268f5",
"assets/assets/Activties%2520(6).jpg": "d14312dc0d3fb01f1b64568f993d25a6",
"assets/assets/Activties%2520(60).jpg": "8995c35cdc10c36e42682e28c0822833",
"assets/assets/Activties%2520(61).jpg": "d9ecd3e3abbbaf823f46208bbb5d60a0",
"assets/assets/Activties%2520(62).jpg": "4cf636d6a7b072e91b065ae4d5fabdf5",
"assets/assets/Activties%2520(63).jpg": "437d2b3c7ae3c368cab9f88c0f2e333c",
"assets/assets/Activties%2520(64).jpg": "af4c3cbbdb90eb348b11fd5e10b95ed8",
"assets/assets/Activties%2520(65).jpg": "2a099f7e7f45376483137bc74bc1d649",
"assets/assets/Activties%2520(66).jpg": "9b4ffb54754914749dd0e91a2476f72d",
"assets/assets/Activties%2520(67).jpg": "6c1c5f4f4b9418178b984813a91ec97b",
"assets/assets/Activties%2520(68).jpg": "5eef3dd64af097cdbfe4f4ba8e41b7ce",
"assets/assets/Activties%2520(69).jpg": "112ba245f9deadfe06604e3350808b3b",
"assets/assets/Activties%2520(7).jpg": "f237005294d4bd3e80e174ba52084766",
"assets/assets/Activties%2520(70).jpg": "32ab9948a59b531773bccf211bd5e66c",
"assets/assets/Activties%2520(71).jpg": "c29bf78bc460780d1934fb28df12ec3d",
"assets/assets/Activties%2520(72).jpg": "403b26161492fc30e880501bed6c96fd",
"assets/assets/Activties%2520(73).jpg": "eea4c949587c6f5dcfb9dbb970f9d220",
"assets/assets/Activties%2520(74).jpg": "9d0ec7e9ef338d9ea0d24cdaf5bd1caa",
"assets/assets/Activties%2520(75).jpg": "9168734a1d473e338ca3789dbfac189e",
"assets/assets/Activties%2520(76).jpg": "e2ac2ddb630c41fa5e8e8a4a9275a859",
"assets/assets/Activties%2520(77).jpg": "8559f6c960ec27a0915437db3a3c4ad3",
"assets/assets/Activties%2520(8).jpg": "ba356a098836bf93d511717126d9e309",
"assets/assets/Activties%2520(86).jpg": "403b26161492fc30e880501bed6c96fd",
"assets/assets/Activties%2520(87).jpg": "eea4c949587c6f5dcfb9dbb970f9d220",
"assets/assets/Activties%2520(9).jpg": "c9348499611e4c5f026a7eff761afd5b",
"assets/assets/bod1.jpg": "9b8ae5d8f92050fc5e803170ade031d1",
"assets/assets/bod2.jpg": "d2f323a83ae34159607e9c173e6a5d0e",
"assets/assets/bod3.jpg": "57f9f8a6b57dd72814db761040de8505",
"assets/assets/bod4.jpg": "b2f3b5372557e2c4c300ff8e7a8eba9b",
"assets/assets/bod5.jpg": "95d43421c0b8dccff1a2e5fd89e3de9e",
"assets/assets/cher.jpg": "0af8e0dbb625e0e4c3c7345b42b0cf64",
"assets/assets/founder.jpg": "cd9822f755e2a6f4b308df4fb3652162",
"assets/assets/head.jpg": "01f0feaa107d0a47042e70c3260d66db",
"assets/assets/liasol.png": "0b55a2bb422a61c6aa6837f0c8cf40ca",
"assets/assets/prag.jpg": "22d7cca707cff303efca17a3b25a5969",
"assets/assets/prag.png": "1d8f1bd970259e6dedda904d5a64c43e",
"assets/assets/prag1.png": "034f6f54ffe098cc593480ed8276b469",
"assets/assets/president.jpg": "9f0a18d8f8844d381664b07e2461082f",
"assets/assets/pro.jpg": "54442d7c2376798fccc8684aca7431cc",
"assets/assets/p_director.jpg": "fb7ac583bd225b0663d7ce999f92922f",
"assets/assets/sec.jpg": "b9d791b70832777687ee3b567b366194",
"assets/assets/tres.jpg": "551756b7a5ea3031cf4eef0ee13143b3",
"assets/assets/vice.jpg": "bc317789fbd41f0b3ec6e164e7522400",
"assets/FontManifest.json": "e7158778990337c376844f5a8592aade",
"assets/fonts/Audiowide-Regular.ttf": "b32da0c186225df40f7e9dc2d5bccc38",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "430bfbfd03362c5247994222b0b226a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "e3705ec6986d200ae999cc338945e7e5",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "806fc7bcb37a697499dfc2a1f70246b7",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "6c5a1a0a94cc813f36a031404bda6350",
"icons/Icon-512.png": "3c9ee71158330f161bc7a48bc0ce980d",
"icons/Icon-maskable-192.png": "6c5a1a0a94cc813f36a031404bda6350",
"icons/Icon-maskable-512.png": "3c9ee71158330f161bc7a48bc0ce980d",
"index.html": "f1fe068b160f0a9a4f69e58a1fbcb3f5",
"/": "f1fe068b160f0a9a4f69e58a1fbcb3f5",
"main.dart.js": "60be3953af9eff19462afc868abf402b",
"manifest.json": "0e03f1ce2d5760d0e47d4512367493b3",
"version.json": "f52acfb0ed0ee27d6ea0684477b57304"
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

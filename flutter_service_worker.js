'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b291c9014c1f9a47cab7a106833b820a",
"index.html": "045a658342e6ae7c46bf707e7222b2a3",
"/": "045a658342e6ae7c46bf707e7222b2a3",
"main.dart.js": "31d44607f4a74c64f6bd0a8dcc9e89fc",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7328e4b59cb473fd99b687a4d9564955",
".git/config": "7db0731c754753c75559569491689e84",
".git/objects/0d/2f0a0920f0c56162a30f3bddc0e7d3f1865db5": "4963d336b3677172f9d41296e52d884a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/66/e966dc4f5959632f26224dacd36144b3ccd991": "74457ce265ef9791d92cfe95451d2af5",
".git/objects/68/b3c80b5951f9cef318b51e502a4665b82de4cf": "6e15e5542a3272207c1b0200481f6ebd",
".git/objects/3b/ec123cbbc356b0730e13806570575c6f53bb82": "0c7606339f583e11c75283d133cd7e06",
".git/objects/6f/cd07d96ce366426f17dce43973f810fb889723": "9a0acc0a5f42cdfdd67670257d86f11c",
".git/objects/9b/c141798a8891148d72bbdf6549d47fe44258f6": "cf1e7db45ed2fb3c346d299247f17ff8",
".git/objects/9e/359167c1e8519a3b8ca390495158bcfec09300": "052776fab64f8794835c7f7b6b540afc",
".git/objects/04/220f96e92e1b4c2bd4749f9c3a1afe78515769": "983b1122c6fb687023671532b0e378c2",
".git/objects/32/bad9fcf8fc3ac190fa5b57bfd070893c5f65f6": "f18bad9cb4c8fc062b3c8807e64be04f",
".git/objects/32/9fc0e505b2bac7d3708b51d521969613b8303d": "431c41d9095419a18a91dc8113d5f780",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/56/0e9679bcfc538e9044d7ec47ccdc3bb042f033": "54db886a30dce276555d27326b7782bf",
".git/objects/51/2461dc86d27ec22d96ceaed9440053dff3e1d7": "ebbb4c77fcc1516e4fce1a9619ee2f97",
".git/objects/51/77ef81824cd73c88b16ca4ae862fd5ed61d81e": "f45602b61a33d52b365d57032a83f76f",
".git/objects/3d/df535f6c7b5eeae34ee4e19eb565a6d1e56aa4": "96b5f5034ec171689a608fbaf736936d",
".git/objects/58/e497128e7b778bdeee2ab5dc7082d605231007": "95dc0797ec6b18449381c45c94948b4b",
".git/objects/67/dccc8c7c52ac71c57abe6e765e012c58c74630": "48303edea77d8a7caa21c7e7953f23c9",
".git/objects/67/251dd37abeb55a7deff73437d593f4ef802ed4": "ce4618ab0a04e07fc4aa1de26c86768e",
".git/objects/67/99e1e1f1e54f63e86d75682fb7fdbd548ab796": "000d78110d6f7aa5ca822d9e50ba0f2c",
".git/objects/93/d828ee979aa9639863895d255a80fb0d8b2c45": "b84bc1fddc023806a1a18892f5756b74",
".git/objects/94/be428f27806686d17ec0c8cd9d592345be56e8": "1fe693b4b3ee30d6224b8e85173f092d",
".git/objects/34/f0adfc726ee0f23d59490cda9a020ecfe54ac4": "2db93cd3d08a9568f4b542e3d0ea69fa",
".git/objects/5f/0bff00acacd81233c14398c0110a6b53bf30e0": "34e2257bce84d1f620162f0498c6b3d2",
".git/objects/33/a372153145dc9025ba0917fc30046b9fd7fe0e": "f7c8dbd819121632f73fcbe0748525d0",
".git/objects/9d/e17d30f80adb87487b2986059cbf3d83187f20": "7c6a53a328c2a7fa4e69f98c6a0eea08",
".git/objects/02/28b5e7219e2ca357362ab904efa75b296985dc": "7fc91eb71fae3e75c61fc84c3e668be7",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/d9/d69a77cad3893020e2270cd1224ef7b85e618d": "648c45776d65665208c71706753bf83d",
".git/objects/d9/679696ed08f65c6bfbc1c552da33cdc8224433": "0b80adc28b5125e1f4e6f2494cff0f92",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/bb/472daa44923611bf221b744f923215c2707f3b": "e0af3dcd31c47794f11fa5668c33433b",
".git/objects/d7/a806da0505ef4f6da2ca6ac95628c8ee11032e": "2bceb2a28d7e61f8d76b498acb7de8fd",
".git/objects/d7/58c6e8726e4d2270f329a6a1a2ebec2f77e8de": "f1722620e1d9173e2f605d04cb729173",
".git/objects/be/60e14b8423f17182c67cb4c658b87896d85bdf": "e5a9adda5d6db660f2efa031fb1a1113",
".git/objects/b3/9fcfb0b067b5c6ee281c8ee0672bb4f61c0408": "6fec6219b598ea40d01bb72bd888f7ab",
".git/objects/b3/f3e071fd14c993086426857e7b048ed683ffe2": "ecb854ba1846c0e0625983f060cf84da",
".git/objects/d1/ad4014d7e066ced5ef8f3d598f54ff69953b41": "d6c0048c6bbbb7961df3e80df9c9a201",
".git/objects/d1/d9f919852f4cd0c26437d498265af3a485ea75": "6b21c4efdca7409a6c0bc83a8c4b1dd5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/2de2714f1777270de1b8b2a6aa32e9ac7cde75": "dfe0efb6fbb220c7b5b56279365ed32c",
".git/objects/ae/4ba5ceeebe4677aabfc18884b088f16044d847": "7db1c081cc8d5594d004961d104b8dc1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/564422ff5745b209e328898dd52b1f7a47582a": "47a8b3eb6467448192ec566d288f5f62",
".git/objects/c7/ada470413921d44672e83dfd735579e11304a8": "5e2a7d7da963741d8611a21f3e319d2d",
".git/objects/ee/b524af8f30d7aa08ff4764a7eb19a1ef4067cc": "90f60b4afb26106240ba8f6bcc18197c",
".git/objects/c9/700b551d6bc585b38a42d6d061f10561006316": "5f6d038e19653e16ae10335369de4f1a",
".git/objects/fc/56e7819329b5f04e43ced4f3b133ca726dd385": "519716864ef5007d7e6b5e424c3c6efe",
".git/objects/f2/de42d6ac166cdb4b4d37b640c08cb0c613530a": "451ae90589721822b08c2be6e3bb4b13",
".git/objects/f5/1fa061ab0618fbde6d3445f8eb3d88b2201c11": "3e2835752f45b0ae1eae72c190c1ef95",
".git/objects/e3/b45105d6201d47694f214f551700903f237114": "573f4fdd49fe5379f8c2e9b5cf65ae66",
".git/objects/ca/8c231ce8e3120124f52b2a7fc73e867788cfb7": "a1523569218c06c669b6b7e2736dcd51",
".git/objects/e4/5fb2421e8bd76264c16c7d5f6dc377925d8cdd": "f24b598236bea9c1e8840ca26d48591e",
".git/objects/c8/6a062ff4419b04fd3f2541737486051e31ed5a": "6ce5fe7327323110705ec66c8c44cc8a",
".git/objects/ed/7eda42876e4e367d3982faba1917ee9832089e": "14f6e0b203a58ae69e4bb9a36543bafe",
".git/objects/c1/4c412d5485da6d758f9eaadcf0465dcb233f22": "7116f8afad265e5518f19bb197a1a56e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/543eecd9a3faadf37f7b0e480ef40ccdcd924e": "7ecf5c859dd68babcf947e37e16f62fc",
".git/objects/4b/8a7a91d9ba7d6328463b5e2f4492ea3ec25551": "a55bb28d7521abb858056797ada1408b",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/16/b971528950fcbb1ac6f693b8e58eedd2531e24": "5830171e555d01f74d91c4264db9ac4f",
".git/objects/80/5d12e4653ebc45df063a064876f46887e10160": "c14c65c75730fae3c28dea7292fa4343",
".git/objects/74/c41aef6e5c640dfe22d2a3904c9f88cf173184": "a48770f6d143f5c60b992bc019e464ec",
".git/objects/74/3cbb8e076d0f2499024309ba63b219f216897e": "ad3155d966c521fbe1543e4c1d183a75",
".git/objects/28/fd70c39fe2af456b6bd1741fdbb309b5dbd4bf": "7a234eb58664cc187c4dd092135d8fca",
".git/objects/28/bb16a745ffaab902cb7c9cd3a60ee2673a54b5": "da3c39e47d07c122d3528bf7171bc0fe",
".git/objects/8a/d160b2706ff13940ac00975a385d74b19b179c": "d5cfeadaca460ec5617a3de3e2ff2cb7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2f/d4eb236cdd6631d9de24cdc5fc3a38014148bb": "b3d5fe9deba46a7103c84d8ef90879c7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/97e675b42f70c44b8aad40cc5907d11de7edea": "832df80af478cbe126b469b5b8467695",
".git/objects/9f/594872c0b0065e937913f4438815f5481509c1": "2dbe87d8b0c37a8c02f934f780d9f2bb",
".git/objects/9f/76b8f2ed53ca9582d0390d719d74ca00235d7d": "2c9d1d7b6648989078434e6b968c7ffd",
".git/objects/38/267b70cb75bc1353dd9829fba05b56a7722681": "e8a07056b9c99d4bd5ee4aeb73fe9bc3",
".git/objects/6e/dabbcfc0c3b337f5725d74a281f3127f4470bd": "4938339d13b651f3c61e09b858000cd3",
".git/objects/9a/3f351e87207f4e2251f78a60d976df65094478": "b5041f7b9174e10148d4e39b49006863",
".git/objects/5c/e5b4937293e689039766b0ad006777fe0640f9": "f10ae52d8ea3b67f91c6637d6d3ba976",
".git/objects/31/24a18fa43fa70ef8ed336106147f41e68740c4": "f82e3e685d947e3a179e775ee50d771d",
".git/objects/65/743755ebbcc04f8caeddf00d2abe43c51b73b5": "993ec9eb60544f777eae298bcc6d959c",
".git/objects/98/e26cd2d7723e6bee1823eb9df1d966c2124026": "ef3cba741e6cc43df55b229c4261a962",
".git/objects/06/37a088a01e8ddab3bf3fa98dbe804cbde1a0dc": "2fedb3e87c69aac3dea537cfcd7943b2",
".git/objects/52/83f6d57747bc00804dda0e0ff5e47bc3207cc7": "1b1f6d0845fe23ee3fcab9c89e87e807",
".git/objects/52/782e2db54b8b0bea98c87316648b312a5fc479": "11d22342d3b1d5aaef816dc738c3fad4",
".git/objects/90/1e696a7400b1bb8fd8f1765be54ccab0132fcd": "ce56fb11d5ae0afcd3bbd5dbb11e9cdc",
".git/objects/b8/1abe4280598bc13a910143b919b167272eaafc": "67676b0dd53be894b965eabfbfa0de7a",
".git/objects/dd/418386d9530b33521107a7846396a9b8af9a58": "3a810a3ca5e4b848a18d994f8684e5f6",
".git/objects/aa/2e5ab971e5c305c0632b6b8a8d5f83763f141a": "dabb4bb47e797ac47811d2d8c3243ee1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/a4f5ef9c5ba5580b897cf7d61a3b7c25eca196": "676be6decc3ee32f8e91e8cd5b3a77b0",
".git/objects/db/8f03f55b322cab3307d59c9ca39d0193249d6e": "bd7180efde58041c6fcfa98e089d11bd",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ed63b71299f310fce78228fcab51bdb1b54e70": "91c484c42484acb475cd1de1fc826b0c",
".git/objects/ea/57316765f51eb8965bf83d9ae468e3a72b905a": "7b5f079757f103e1f0a7a24c0b3e0df5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f0/dd851f71727b1e8a0d5d010fc43bb9c9e46f2a": "2f5dea9f28d1fdefa23d5d67cbef2573",
".git/objects/c2/25ecfabd795ee498b7bd9cfde79d8d94b9c7db": "03576601e5ab96eafebaf6eb80c2a851",
".git/objects/c2/0261637cc5be8b804f9b8f6ba74d808b34e7b0": "cedfcff198f1dc9450e0bcc72a8cded1",
".git/objects/c2/eb91ee629ef07fd599db91a17c806468d05a44": "f03696dea85532d8f0db35855d93d1ee",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/9f3a70d12ce84e46195c2ac7ad3f81f666f3d5": "2f7ecccceea9a6d998d5cae556981b43",
".git/objects/f8/87760558a77e34968e95a124115e9a3e00945d": "fc046ca67740409a481e3d8813717e34",
".git/objects/e0/1f10e32b93a430937d0152df17d0dca92f6268": "fb941f6985adda81ebf6c7763e72eccb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5870b73bd065d71be7696364f7fdd08d2ceb1d": "bfa0ead2bf5b69475d9e3cb055219a40",
".git/objects/79/59e72ab5ba81d78fd6036da930d5d8c71d6957": "4fe1b21ed518bd620a0177a83ea09fab",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/1b/4660e0976ce06437ad66a55e4f60a232392012": "a936a7e5b578b6e881b204194e4464ba",
".git/objects/84/40a38e3eed4694fba56b39f437f4abb92b5332": "a0603539023f0f4133668c5630dd3a99",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/3f3261ab3dbe40fe949edd8a23f5ebc0b66a79": "88c77299fb2308931dc615b146b89858",
".git/objects/4f/eb8d4c624ef9abcb4727d3b621ec6838236042": "2444c1dedf7ecb8b6c1efc0e271113bd",
".git/objects/12/3f79e2cfd942eff360c533bb372034eb52a54e": "3a2a76b6949e0bf603cf982868fa612d",
".git/objects/12/58f995bf9c3d05ccdecc4d701d91b7767a1f96": "c5a31d582296fb35cf00a8d253485963",
".git/objects/71/4b0dcb172654e66f0ab668cd7200113ead71f0": "999cc88b58675048f93b3388f260afb1",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/8c3da6529e2d0b30ef9d3d29c2296633072cab": "f46f57e421c0578081f16d1f2554a5e1",
".git/objects/40/621cc43116f60f25532fa6748e1dd4b9f1ef7d": "cf9f48db5f2ad7324fca465e7c46b78c",
".git/objects/40/e6b2fd24afcbfc995dd30f932a2752654b3038": "5315efbe612b86bab7931a051eb11d6b",
".git/objects/2e/ef14f34f5e084ec14295c724ff95f3d605bafe": "4e598dd7b2dfc7165c3cec11393c82b1",
".git/objects/13/998e231dd71112b86d0dee359e8da90ea33aa3": "1e3c901f6c70118899bb6e97af7763a6",
".git/objects/7f/12c5a452fb5a95e768629ff28c5dedf2544ee8": "93fcdb4d1dec81fa229d2b5a68d3a3cf",
".git/objects/7a/50db606551ba73c9792e739e57285e0a8aab3f": "af20fcbed7fc4e20ac0369dfb259d408",
".git/objects/8e/6ede544b38eaf3cd1d83e8c1169cafaa383610": "24c49e087356b284770a21e2c6209841",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e73e506f009e3f823174250d5dbc9a0",
".git/logs/refs/heads/master": "7e73e506f009e3f823174250d5dbc9a0",
".git/logs/refs/remotes/origin/master": "251f0accd85a376d6a9f05e93779d914",
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
".git/refs/heads/master": "f91b5dd5335cd99710240375acde88ca",
".git/refs/remotes/origin/master": "f91b5dd5335cd99710240375acde88ca",
".git/index": "6c2b88ecf18d028b26dc085d9db14de5",
".git/COMMIT_EDITMSG": "d601bd194e6deb34c767ca607090847b",
"assets/AssetManifest.json": "e2b02d9a708c9eddeb273b5ef93e89cc",
"assets/NOTICES": "d96190658e51d64c27ecdfa41883d9d1",
"assets/image/login_phone.png": "309b71b96773ab48709533eab97cb499",
"assets/image/gray_close.png": "e5f6a2497c996377534c2294004beb7b",
"assets/image/more_white.png": "e27a3024da8ff38f0a056fba51272b19",
"assets/image/navi_back_black.png": "b9602ae451b6979db78499e35ce337b3",
"assets/image/arrow_bottom_black.png": "4fd12c6462ff0938cb73bd6afe7a0eb0",
"assets/image/login_pwd.png": "4cffd396ebabad41f7da37527836b0c6",
"assets/image/logo.png": "ba4f6b9c1bafbc0a949d0916ca097373",
"assets/image/about_1.png": "3109230e02eca5a04f7bb1ccf6481afb",
"assets/image/about_0.png": "d835483d4901b8470ae6f20d88983163",
"assets/image/about_2.png": "e80261fa7dff90b4c567e10efcdcee8a",
"assets/image/more_black.png": "12fddd2f0e2474361abaf3b01923e90c",
"assets/image/about_3.png": "0e1eda71f640de3a0ca8c1a581588206",
"assets/image/circle_left.png": "7922fbad1cd14a8929e8c4e603cc563f",
"assets/image/circle_right.png": "e07138eec55ea39cc8d4cc60f186ea12",
"assets/image/page_back.png": "8a0f26b6078462432cc95d356e9d21f7",
"assets/image/arrow_top_black.png": "9f66901814e3262b41094e9a00732a67",
"assets/image/circle_input.png": "a632b2c6fab9f3b8667e0b042622ad64",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "56606fe1a09d4ff8a2cac18771828f44",
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

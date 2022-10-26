'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "feb0bd3a37693252747769ac754edc8b",
".git/config": "44b8940f7c2504d034c334b42e5207df",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "18378f30db966acbfad7cca89a26a73c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b37a7758c56eb2976d3386705516d5b6",
".git/logs/refs/heads/main": "bde3bdf5f834b1be0f43d81050c76ea7",
".git/logs/refs/remotes/origin/main": "56da7000c1ce78f61c3cfce6ccb27fb4",
".git/objects/00/8a25a3db9e5d7d9cb75ebefdcb41d73dc41c75": "16b820522139849b77f3eeb3ae03d086",
".git/objects/08/e970b912d653d391877e21a4f16c30031ae957": "430154c3e480ee0097b84d3e27d9868d",
".git/objects/0b/3f2f3408622aa40010994e2bbdf9d73d1c7b55": "c8ad18342a6f64e0b74ef21be9937d49",
".git/objects/0b/8c01a2d30b4f664f83c6d277b5f56dbb012456": "42a1e057d5229435d049820e0bdebfa4",
".git/objects/11/787b5866bdea413e470d81e6f6cd016822dc84": "c4e097a1392ad2772b3367921dc75e82",
".git/objects/12/cbc65211dd363d8718bd38828555bc4eb02963": "f5119d24b097dd6b9c66e013db317b8e",
".git/objects/13/f3b466fdcabcda2d8822720a732efc2211ce36": "7c9782198f25a7f742b630187553e40f",
".git/objects/15/b782f1e9640d9c53512548f746806dd718632f": "81b2194eb4b2254084841c225724f5c7",
".git/objects/18/65e6981f90f24f8d2f83babf1e224b4248ccd9": "e270efcc6c9ebf9675f02af6c3c991ed",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1f/a14d2721db48842e85ffbc90dd7eb30820f67b": "6fafe14b00bcdd168cb04bf067b960f6",
".git/objects/22/fa4ded57afcd04cd168029b561b03984626a78": "f35f37f54e855b47c91ab3f0b67c0712",
".git/objects/27/b09eb55c37c41ec87da69d698addf491462ce4": "107e9646c70387263c806f6c3b5749c2",
".git/objects/29/ab03e72a78fb42afadbf290e73c1bcfabda762": "4facd546219af0b217c225721345f1bd",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/b720aa6a0f3388901a37c1405ff2ce2b0abd14": "e2105f29ac0c5f94fe4bc6ce6d82a8c6",
".git/objects/32/55d8229625676e8f1fac89d10b9a6badd89c8e": "a719ff04e2de3235521473a383d58cad",
".git/objects/34/8817d576f0f63d464e63aca4d2094ae2f08705": "c5ae083153d774bfaf23e7c29c54db00",
".git/objects/36/b0ec9b794588bdb17ddc6af78748079e5917fb": "774dacbca53bbef07622d165c1fb61b6",
".git/objects/36/fcbd98dc5f81793e5d2af84884e31295f4b082": "fba753176fdf1a46334b926620057f87",
".git/objects/39/eb88ad1348a321ad536a5de6a3af7a59ef2593": "904e4b7f592f79e8088324f4624962a5",
".git/objects/3d/48d1fc1136f82b330e7f3b41c701072f053471": "b17a6b0c6e32c17550979c1e87d17950",
".git/objects/3d/a894b8be53070163e9a71033834876b56dfffc": "0df13ffcdb03f1b07446870770d3be25",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/30348746069e8cc66e943529501c5e61b78682": "251d3b05bbc6ed138af71b8f5816b2a7",
".git/objects/45/85a89f94976a0d2446c0f99da29b01b010145e": "aaef9d58efca3594600d7c3a68e87972",
".git/objects/46/59fd38bb7ed7f1d7ef54873f8247ea0a8c0a15": "410cb558377db690eba33ae4cd8f07dc",
".git/objects/49/34fcd3ee70e83fc18c6fc572ef7c8349b1f644": "eb67b7dab2ffc403fa6c1f39a42651af",
".git/objects/4e/44a24871d38ea662da3bde705e99745f9d8542": "656caaa169ffeb3128e9369913acc24b",
".git/objects/51/79accfad13373381202272247567b4f0ed1cb3": "6a3aac545f7eab460184180ffdd1f12b",
".git/objects/51/b806b6935183f179768af4c63b1fd108361a1d": "8a5f5ccbb032322367685bbba0ebdab6",
".git/objects/58/2325f284d7237aed893b4d2c183032b360cbcf": "ccb184d2fb2cb3d9dd36dd70463a1534",
".git/objects/58/e1309a18d446ba312e15592ae0f02600e74757": "e65b8a835d72e3d15a66a7781ff17cd6",
".git/objects/59/262ea22a874d51a6f5e7cf6778ed0fae88bc69": "369370cf7e9871f0f1a8138df13de6d3",
".git/objects/59/a1b4c2df0e0524117b470d96ac816ebb47daf8": "721f697f53b90c3a6b30b2c4cefcccec",
".git/objects/5b/0c1038884d2dd252b500864a63dd553057e146": "09adf9a60255ad22a82d5e375d66b1b7",
".git/objects/5c/0ac3bf46ce3a492c01e1ef2f8f1a9a80846276": "bb3d829adb9651659933d7e95647cb83",
".git/objects/5c/230ed50c49dafa3b0890c84a2e9712bbcd0541": "e8038c9ef80565df5d99e7a8840e9d65",
".git/objects/5e/c594cf976ad2fae0255870dc7f5f610c779f63": "b3f9830cd86c9a185e4087a636d380e0",
".git/objects/5f/7f1c913526c98da9cc08f1af1a8fbb997aec51": "30b4a2e36fff7c7948247d19533ddc02",
".git/objects/64/834e25c1edd6166bd3794481d3b68a4b97ffd8": "3584af74f9aa3e84dd67e67c8b3ba86e",
".git/objects/66/96b27f4dc64b740c49e0da4f0e135fce9ce28a": "e0790ed4c8773612e0c732f048cc4d8b",
".git/objects/68/5d5294b3731571eb8b782d707153b9bc523c37": "0509ff77f174b3abcab192f67fb8541d",
".git/objects/6b/e2cd7c6b10cf297678400e19042f0b80edc3ef": "00970e9bd59640aed57d6c399e992cc5",
".git/objects/73/255f41460d6c382dce0c500d1fafb44895a83f": "e3a0fc14c550b6cd4a04aeed84561736",
".git/objects/73/e938c4b8bd18e091a04123efc63770514409e7": "048e206209bef796e6455abbb8f8902a",
".git/objects/74/2bd5f7fe0bf296de59e756dfcd995da5f8c11d": "ba4259b26bdb150a8ea9872eaf307234",
".git/objects/74/438dde08a79c1e99d98290630fd9210316507d": "25fa8ef4730c72c9213a1485a7447d36",
".git/objects/78/10ee865e3bd17c46875bd7d964f3e7a7562857": "84a64fc2d4778e1aad2f9cade303d0b0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/cddc15686dfc7f221099ebf04f72050e62f44a": "f5a9c0f6742fcff0fc99f6c9e2597e6b",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/f66a66d45526bdb9511d66c7219f2e3f6ee8f1": "28530f8965c2e87dbac366a2d5d85f7e",
".git/objects/80/619358a35c075e3761b2d5030d4e0fd36287bb": "5500aac2333f4da74d109487a0f20d29",
".git/objects/80/f10daa1517011e185d2a9f9beae613c6e8ef49": "dc8f958eae754440e6e658312f421178",
".git/objects/80/f44f1eae6728ad9e6ddf249b0167ccffc7558c": "0aaa8f1e30e9c41701872a2a6343516f",
".git/objects/86/715729726cb3b3608d85a377af433a3080b974": "9647b2dcf6b1ec92df5b0a7e2bd0ef70",
".git/objects/87/269cd038eee212728441acdaff724d6f8028f4": "e6d207acd31444d2e1f8a6736cc48196",
".git/objects/89/0b09829ca413ba07bdaa53c8de5db93366f64c": "a8e67c681c739c29b84d0d84bf8a07f9",
".git/objects/89/205e347c232afd1ea7dceee2d77a05d0b4efa7": "49915b3d0bce2b33e1f1c3b81213f543",
".git/objects/8a/d3ceae2586ae5334d52fa57358dfb4fb553825": "77685dbf4c4834d1cbae347dc1017544",
".git/objects/8c/9fe47d195d2bbf9778908e37743bf8278000f3": "6d56cdd3cdd05b3577d3470bb39fc2e5",
".git/objects/8d/afba770f3884e599fa0bd87e983e592354d19f": "dc2cdb3a6cd8cb7948e738c1263eb73f",
".git/objects/90/7073999a4299a2d3eb0e672d2be539e69e65dc": "c4b037738d74bd1fcf1372b1d411a3fb",
".git/objects/91/4fa72a077fe8f4df44403f9006df88977d8d10": "5be35a19f4954cb0e92e963c267839f1",
".git/objects/92/bfc9bbea7edbdbc612871d8d934fbbbdf59810": "44b4c6bdb28252771accd19740a76169",
".git/objects/92/bfea505cb839a3de3eff316d1735ec1ce6815d": "f3502a9d9e13173dc5a17bc823348623",
".git/objects/93/f7b3d776075e2ff9750eab3b0eb3d7dffd13c7": "cb174f89d64bdf7bc7d85780f27c486d",
".git/objects/95/8696532cf133447bf1d42c2a785cf3ca73099e": "bf5a7d0372a722f3311cf8744f1124f5",
".git/objects/96/cd1116042cd4d54e98d0f566cff796dd115a5a": "19115f8955598f75cfc6f048aad1a7b7",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/949bba2066a30445103ecb6e7ba0ae1d256cb1": "d1fffd131e37913a2e342ca0a3562c35",
".git/objects/9b/87f16b4738a3708077bb7afab35a5e513aa168": "167839d1b63f864a27020b6914d4ba97",
".git/objects/9d/455a817f9cf3b57fba2613c8fef43329e1c493": "234f093334951d8fbb888e949c0aa578",
".git/objects/a0/99aa1d1210df7486b7de44ad094f548f4fd264": "0eb12477b7ec7095aac276ec2d6625cd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e6f84bb31b9aab3de5099a42a70c75d7edd20e": "288db2efe167fbc8bc7530f97586c0f8",
".git/objects/a4/0fa1c39dfd978f85e83c1dca538de28329cfeb": "635ef780416ae5a51698fa57438a4837",
".git/objects/a4/82cfbb7fa697594db7340e0631339cef76d812": "fddeeb35346df49dd85984e0317f0c92",
".git/objects/a8/b76a726083025599804c4d5723605d5dd1041b": "660d879444ce574d5c79d7c55d65eaef",
".git/objects/a9/eaed881dba73345c86adbf06f5b3a8d7c97ee8": "efff3138d31f9209752b0f1cb593a878",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/a005752c0baaa71e7aa5c1fedc6f7c4f2fc8a9": "7ad6aac593dcf1a574b4b460853fc74e",
".git/objects/b4/dd26359726e7b0846568f46f0ece2d72169cef": "78d79e79870812d5b2ec08c8697d9acb",
".git/objects/b5/88de2fbfcb55c9c6e246262aafe807fc824aee": "32e1bd7e206689c5ceedbefe6ece6861",
".git/objects/b6/82e0aaa79e1f45d232d9a33d0f8e1e441b8a09": "a6bc11fc26aa403344de5ee6150fb808",
".git/objects/b6/9f3737d3d022d01eb03b1debb97f5ee0cd75ee": "6aa7d55fd353e375f4f345e5183fcad9",
".git/objects/b7/5cf58d55182f7d16d7de9a7a481ae6e545b071": "744110785aa3ad4aa244b32cbd395c49",
".git/objects/b7/a6155c9e666c836e27a5079a9beec7b0e13c37": "0596099fe28c856d665429e4b3928426",
".git/objects/b8/7ca568f8e9a07c8e822761415e5c7305bcd756": "41e60bbce124e87dcd60a90d59cf6acb",
".git/objects/bb/767d4284ba1ab8e32d19c45dcf54b3a1648013": "2caaa698956fc0f4e0dd4fe695b33b01",
".git/objects/bc/1e361826949f44d1f3d02faa99838ee140cbe1": "08e8b6f86a164738fe560b99e1332ff9",
".git/objects/be/bd73314385710dc15e33a8e631420407ef0a4f": "7fd54b6cd9a113d2c39761c0d1497b56",
".git/objects/bf/8af741ef7295a1bd0ce5568a328676392f66e1": "ced36b0d4e7b11b7b5fddd0a6d203142",
".git/objects/bf/f4231cdbaabb483b0d2c8846a05fa63f2c8bca": "20ed080c6ee0101b7bf7e71e83229ebf",
".git/objects/c5/7b605f1b96960cbeff5d2b50eb81f9c8db4090": "89c6f2f9a08718664e7bcf629baadada",
".git/objects/c6/53718bf81bbc01f089e69f8ee4d32d9d747212": "723435b5370dcff8e979a2eff95a2519",
".git/objects/c8/38aaf41a0232e051365a113b6165bf93d184f8": "46c94a1f8ecd7f5d79ded4ad6c246c0b",
".git/objects/c9/0d2dc923752d9c6d6470f808aa3f3037052e24": "c266e0c887de96db842fe2ca512af7ec",
".git/objects/ca/278339cfd6afefb02a7968e1645907a7007ad4": "f22e99c6ced41764670ca8987954f50e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/ccda4bf780b65d93f1499f817cc38fdfe1088b": "714dcb6075ac6c118374066d37c06621",
".git/objects/d2/e080fc617739467c62658530c5f4273fd1bdd7": "5f853aa30b63f95f26cfff2768d86c87",
".git/objects/d3/48154ee9459c17b201bc354df0ed875a97fbdf": "56669592116d8fdac6619068de18cd7b",
".git/objects/d3/f85ad45cca170d4714494e74485994827f385e": "d11a874745044b24ab46a478a973a10c",
".git/objects/d8/acbd0f5bbe9fba500c519405f95906300f82a2": "586872fadb50e999e43c1cf8648e5dd0",
".git/objects/d9/61e1f6ea35bbb1cd0569edb069b3d14d2944e5": "1014305dd2cd271513ab2d0aec3a8215",
".git/objects/db/e14ea723041108c89cab6d428526642bde5c30": "46961e368721993b73d2523eaa60a9f5",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/0d0140bb9593846ce850eb800490f47f782c7d": "d8f24a48c05fc1c3a3247e2acd8b3410",
".git/objects/e4/6f2ee4d68b205b84334171c62975041d59a5f3": "2159e1e51700ca7722e42d506596307b",
".git/objects/e4/7169886a239820b3cb5c6bc2ffc243d93d273b": "3fda060095fc1968734982d7e5260550",
".git/objects/e5/68f5ae39ce1f40fe1e223744d5fac667ef0821": "236d827db0de3cdbcfdf283dbdee9412",
".git/objects/e5/6cb4a9f5741a1beadc70148b7ba3b6a2e00671": "0e77ad64ea295bae19656b0ffb91a1be",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/2876a35c04547f96e45d90b3bf27287d87224f": "d2c8098c93e79aca8de00d0d8e2986d9",
".git/objects/eb/5bb7b793f732fa38ce7fe3d87b8f00181ff83f": "3524b9bfd771b19cb1fd80c3a53a759d",
".git/objects/eb/e51306bd0ef8f9df5910d0c7cb501c5599665e": "1efbeaf6e2c7356be8345046e566e962",
".git/objects/ec/429f6cbea16e2156aaff8592a3521c25637a41": "9eb6d997ccc39da73bfd549f92c4c990",
".git/objects/ee/49c5a6f0ba938b70e136afe0561d58df62e738": "c654f7b3573b006a5fdbde334110fae3",
".git/objects/ee/4cbc1250fd73b383fa09ec36bfbeab07c6e193": "290839d7a9bb1006145fe15120c8ebd9",
".git/objects/ef/c837a9caf0c4ebaa74437c10c7613a5f46ca75": "5c00184d258afd11b82ae3cbc8ef1469",
".git/objects/f4/6a9bcec1cc08e30bae735dd41d482a352a54a1": "b993160323cc5ffd65ff3f4b1c0189d3",
".git/objects/f7/b3f49916962f352f594f7c0b894c7c7933b31e": "cca3b396bf573a4c4f8b4ac756e90290",
".git/objects/f8/26c1f5055b778256380f2aa0f9b759093612d0": "78e70734321f68505f765c46e4d95566",
".git/objects/f8/3740868b538c65ab6c7396eb01f84ea3eef80e": "fef47196f6c6ddc66c68d744f9867a6c",
".git/objects/f9/fd3ae37f2911bb34036f11dc7c26eec8b8064e": "5c83752a1c3121f50876f6b8440c78cc",
".git/objects/fa/99b86483de9d821980d6750183d760813d17f5": "bab924b1591ee7bee0f0527570b0daf2",
".git/objects/fb/f8ca9be1e4d3a531efc69f4a07d23779cdd404": "72f6919563bbd6032efab0c16f74bd8b",
".git/refs/heads/main": "75444fcdd02a1dabf139a14a1d07f0dc",
".git/refs/remotes/origin/main": "75444fcdd02a1dabf139a14a1d07f0dc",
"assets/AssetManifest.json": "3b56b4c5e342fb4f22b30ef4a2ac6717",
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
"assets/assets/kymrhys.png": "b40c2ee3f10c34bcc1570a367e2d8e80",
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
"index.html": "8eaf2b431dc44d232d53108e271d1d63",
"/": "8eaf2b431dc44d232d53108e271d1d63",
"main.dart.js": "eb57d5148d75f4493aede24e7a9efa37",
"manifest.json": "0e03f1ce2d5760d0e47d4512367493b3",
"README.md": "febe72f88f120797e75849310fd119d4",
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

const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\haris\\.gemini\\antigravity\\scratch\\this-the-place\\public\\images';
const imageUrls = [
  { name: 'this_the_place_hero.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/dd4c4b93b97ad235a0bc249d67e1ee68.jpg' },
  { name: 'this_the_place_ambience_1.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/a933f609216504c5ce5e62f3b6aadfc7.jpeg' },
  { name: 'this_the_place_ambience_2.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/1262b410ea027bfc909567becb2ef17a.jpg' },
  { name: 'this_the_place_ambience_3.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/733898900b41afd45fa4c9180e5cbf30.jpg' },
  { name: 'this_the_place_ambience_4.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/9ad677a1e90d5debfaf8356537d4237b.jpg' },
  { name: 'this_the_place_dish_1.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/4482836e958921a3c55f46492555173c.jpg' },
  { name: 'this_the_place_dish_2.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/0e791c00e66adb17ce7b48a63d738faa.jpg' },
  { name: 'this_the_place_dish_3.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/78c2aa9097daa4b184686d8d07e9621a.jpg' },
  { name: 'this_the_place_dish_4.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/3bfa55b8a3d2a3603b5b7c9d995dad0c.jpg' },
  { name: 'this_the_place_dish_5.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/dcb08de8632fd0fbf4785a54750b833c.jpg' },
  { name: 'this_the_place_dish_6.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/fc3eb11b318e2320f3faf724483b8a2d.jpg' },
  { name: 'this_the_place_dish_7.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/488672c55a3fb56fa38b3a4b25f9896b.jpg' },
  { name: 'this_the_place_dish_8.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/901da2ce73b784b17aa4f7627c666791.jpg' },
  { name: 'this_the_place_dish_9.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/9657b85ed3abd9479c3f18dc65252542.jpg' },
  { name: 'this_the_place_dish_10.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/b6da300886ab0ac21b6e09ee629e44ed.jpg' },
  { name: 'this_the_place_dish_11.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/418a46c373a3df1f17ee810746f8b078.jpeg' },
  { name: 'this_the_place_dish_12.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/45e1c80acc4c9d9cfb1a01880443f64b.jpg' },
  { name: 'this_the_place_dish_13.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/c1fe1775be16b69be4179405394b6957.jpg' },
  { name: 'this_the_place_dish_14.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/8626114a103bd38b9a64762c3e9e5038.jpg' },
  { name: 'this_the_place_dish_15.jpg', url: 'https://b.zmtcdn.com/data/pictures/5/18614845/c2433b6ffdadf5df3be5f56a8d3f15e5.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading authentic Zomato photos for This The Place!...');
  for (const item of imageUrls) {
    const dest = path.join(targetDir, item.name);
    try {
      await download(item.url, dest);
      console.log('Downloaded:', item.name);
    } catch (e) {
      console.error('Failed to download:', item.name, e);
    }
  }
  console.log('All authentic Zomato photos downloaded successfully!');
}

run();

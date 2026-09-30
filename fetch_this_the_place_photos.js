const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
  'https://www.zomato.com/hyderabad/this-the-place-madhapur/photos',
  'https://www.zomato.com/hyderabad/this-the-place-madhapur/photos?page=1&category=all',
  'https://www.zomato.com/hyderabad/this-the-place-madhapur/photos?page=2&category=all',
  'https://www.zomato.com/hyderabad/this-the-place-madhapur/photos?page=1&category=ambience',
  'https://www.zomato.com/hyderabad/this-the-place-madhapur/photos?page=1&category=food',
];

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};

function fetchPage(url) {
  return new Promise((resolve) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function run() {
  let allUrls = new Set();
  for (const url of urls) {
    console.log('Fetching:', url);
    const html = await fetchPage(url);
    const regex = /https:\/\/b\.zmtcdn\.com\/data\/pictures\/[a-zA-Z0-9_/.]+/g;
    const matches = html.match(regex) || [];
    matches.forEach(m => allUrls.add(m));
  }

  const list = Array.from(allUrls);
  console.log('Total unique Zomato picture URLs found:', list.length);
  fs.writeFileSync('C:\\Users\\haris\\.gemini\\antigravity\\scratch\\this-the-place\\zomato_pictures.json', JSON.stringify(list, null, 2));
}

run();

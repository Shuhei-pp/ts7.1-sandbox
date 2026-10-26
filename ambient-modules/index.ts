import hogeJson from './data/hoge.json' with { type: 'json' };
// import piyoCss from './data/piyo.css' with { type: 'css' };//ブラウザのみ
import hugaMd from './data/huga.md' with { type: 'text' };
console.log(hogeJson.description);
console.log(hugaMd.length);
// console.log(piyoCss.title);
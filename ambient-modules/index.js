import hogeJson from './data/hoge.json' with { type: 'json' };
import hugaMd from './data/huga.md' with { type: 'text' }; //nodeでもexperimetal
import piyoCss from './data/piyo.css' with { type: 'css' }; //ブラウザのみ
import fooPhoto from './data/foo.png' with { type: 'bytes' }; //Bun？などのみ
console.log(hogeJson.description);
console.log(hugaMd.length);
console.log(piyoCss.cssRules);
console.log(fooPhoto.length);

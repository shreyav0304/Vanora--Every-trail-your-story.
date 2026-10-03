import test from 'node:test';
import assert from 'node:assert/strict';
import {treks} from '../src/data.js';
import {renderStories} from '../src/story-view.js';
test('every atlas destination has attributed editorial context',()=>{
 const totals=new Map();
 for(const t of treks){assert.ok(t.stories.length,t.name);for(const s of t.stories){assert.equal(new URL(s.source).protocol,'https:');assert.match(s.reviewed,/^\d{4}-\d{2}-\d{2}$/);assert.ok(s.label&&s.category&&s.title&&s.text);totals.set(s.source,(totals.get(s.source)||0)+(s.title+' '+s.text).split(/\s+/).length)}}
 for(const [url,words] of totals)assert.ok(words<=200,`${url}: ${words} words`);
});
test('history, research, folklore and research gaps retain their distinct basis',()=>{
 const note=name=>treks.find(t=>t.name===name).stories[0];
 assert.match(note('Rajmachi Fort').text,/Shrivardhan and Manaranjan/);
 assert.match(note('Roopkund').text,/2019.*38/);
 assert.equal(note('Hanuman Dhara').category,'Folklore');assert.match(note('Hanuman Dhara').text,/legend/);
 assert.equal(note('Karaparai').category,'Catalogue context');assert.match(note('Karaparai').text,/not yet/);
});
test('editorial renderer escapes text and exposes source dates and offline limits',()=>{
 const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
 const html=renderStories({stories:[{title:'<script>bad</script>',text:'<img>',category:'History',source:'https://example.com',label:'Reference',reviewed:'2026-10-03'}]},{esc,icon:()=>''});
 assert.ok(!html.includes('<script>'));assert.ok(html.includes('&lt;script>'));assert.ok(html.includes('noopener noreferrer'));assert.ok(html.includes('datetime="2026-10-03"'));assert.ok(html.includes('reference websites need a connection'));
});

import {chromium} from '@playwright/test';
import {readFileSync,writeFileSync} from 'node:fs';
const b=await chromium.launch({channel:'msedge'});
try {
 const p=await b.newPage();
 for(const size of [16,32,180,192,512]) {
  await p.setViewportSize({width:size,height:size});
  await p.setContent(`<html><head><style>body{margin:0}svg{width:${size}px;height:${size}px}</style></head><body>${readFileSync('public/icon.svg','utf8')}</body></html>`);
  const path=size===180?'public/apple-touch-icon.png':size<100?`public/favicon-${size}.png`:`public/icon-${size}.png`;
  await p.locator('svg').screenshot({path,omitBackground:true});
 }
 const png=readFileSync('public/favicon-32.png');
 const header=Buffer.alloc(22);
 header.writeUInt16LE(1,2);header.writeUInt16LE(1,4);
 header[6]=32;header[7]=32;header.writeUInt16LE(1,10);header.writeUInt16LE(32,12);
 header.writeUInt32LE(png.length,14);header.writeUInt32LE(22,18);
 writeFileSync('public/favicon.ico',Buffer.concat([header,png]));
} finally {await b.close()}

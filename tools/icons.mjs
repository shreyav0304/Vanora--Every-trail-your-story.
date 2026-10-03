import {chromium} from '@playwright/test';
import {readFileSync} from 'node:fs';
const b=await chromium.launch({channel:'msedge'});try{const p=await b.newPage();for(const size of [192,512]){await p.setViewportSize({width:size,height:size});await p.setContent(`<html><head><style>body{margin:0}svg{width:${size}px;height:${size}px}</style></head><body>${readFileSync('public/icon.svg','utf8')}</body></html>`);await p.locator('svg').screenshot({path:`public/icon-${size}.png`})}}finally{await b.close()}

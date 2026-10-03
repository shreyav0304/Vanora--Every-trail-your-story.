import {test} from 'node:test';
import assert from 'node:assert/strict';
import {statistics,estimate} from '../src/stats.js';
test('distance and ascent use deterministic recorded coordinates',()=>{const s=statistics([{lat:0,lng:0,alt:10},{lat:0,lng:0.01,alt:30},{lat:0,lng:0.02,alt:20}]);assert.ok(Math.abs(s.distance-2.2239)<.001);assert.equal(s.gain,20)});
test('paused travel is excluded, null altitude is not counted',()=>{const s=statistics([{lat:0,lng:0,alt:null},{lat:0,lng:1,alt:100,break:true},{lat:0,lng:1.01,alt:110}]);assert.ok(s.distance<1.12);assert.equal(s.gain,10)});
test('baseline responds to experience and has a planning range',()=>{const trek={distance:12,gain:600};assert.deepEqual(estimate(trek,'Beginner'),{low:5.2,high:6.8});assert.deepEqual(estimate(trek,'Experienced'),{low:3.6,high:4.7})});

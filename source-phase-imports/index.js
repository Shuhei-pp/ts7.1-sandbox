import source Module from "/Users/p10298/Documents/personal/ts7.1-sandbox/wasm作るくん/target/wasm32-unknown-unknown/release/wasm作るくん.wasm";
import { performance } from "node:perf_hooks";
// インスタンス化
const instance = await WebAssembly.instantiate(Module, {});
const exports = instance.exports;
const startTime = performance.now();
console.log(exports.add(1, 2)); // 3
console.log(exports.subtract(5, 3)); // 2
console.log(exports.multiply(4, 6)); // 24
console.log(`Execution time: ${performance.now() - startTime} ms`);
console.log("2. primitive typesctipt");
const startTime2 = performance.now();
console.log(1 + 2); // 3
console.log(5 - 3); // 2
console.log(4 * 6); // 24
console.log(`Execution time: ${performance.now() - startTime2} ms`);
const memory = instance.exports.memory;
const buffer = new Uint8Array(memory.buffer);
console.log(buffer.findIndex((value) => value !== 0)); // 0

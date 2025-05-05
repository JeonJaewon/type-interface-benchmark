import { execSync } from "child_process";
import { performance } from "perf_hooks";

function measureCompileTimes(filePath: string, iterations: number): number[] {
  const times: number[] = [];

  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    execSync(`tsc --noEmit ${filePath}`, { stdio: "ignore" });
    const end = performance.now();
    times.push(end - start);
  }

  return times;
}

function calculateStats(times: number[]): {
  average: number;
  max: number;
  min: number;
} {
  const total = times.reduce((acc, time) => acc + time, 0);
  return {
    average: total / times.length,
    max: Math.max(...times),
    min: Math.min(...times),
  };
}

const iterations = 10; // Number of iterations for the benchmark

const typeTimes = measureCompileTimes("./tests/type-test.ts", iterations);
const interfaceTimes = measureCompileTimes(
  "./tests/interface-test.ts",
  iterations
);

const typeStats = calculateStats(typeTimes);
const interfaceStats = calculateStats(interfaceTimes);

console.log("Type Compile Stats:", {
  average: typeStats.average.toFixed(5),
  max: typeStats.max.toFixed(5),
  min: typeStats.min.toFixed(5),
});

console.log("Interface Compile Stats:", {
  average: interfaceStats.average.toFixed(5),
  max: interfaceStats.max.toFixed(5),
  min: interfaceStats.min.toFixed(5),
});

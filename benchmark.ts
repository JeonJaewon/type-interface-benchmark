import { JSDOM } from "jsdom";

// Set up a simulated browser environment
const { window } = new JSDOM("<html><body></body></html>");
const { document } = window;

// Function to calculate average, max, and min times
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

// Number of iterations for the benchmark
const iterations = 100;

// Arrays to store execution times
const typeTimes: number[] = [];
const interfaceTimes: number[] = [];

for (let i = 0; i < iterations; i++) {
  // Extending HTMLDivElement with a type
  const typeStart = performance.now();
  type ExtendedDivType = HTMLDivElement & {
    customProperty: string;
  };
  const divType: ExtendedDivType = Object.assign(
    document.createElement("div"),
    {
      customProperty: "Type Property",
    }
  );
  const typeEnd = performance.now();
  typeTimes.push(typeEnd - typeStart);

  // Extending HTMLDivElement with an interface
  const interfaceStart = performance.now();
  interface ExtendedDivInterface extends HTMLDivElement {
    customProperty: string;
  }
  const divInterface: ExtendedDivInterface = Object.assign(
    document.createElement("div"),
    {
      customProperty: "Interface Property",
    }
  );
  const interfaceEnd = performance.now();
  interfaceTimes.push(interfaceEnd - interfaceStart);
}

// Calculate stats for type and interface
const typeStats = calculateStats(typeTimes);
const interfaceStats = calculateStats(interfaceTimes);

// Output the results
console.log("Type Extension Stats:", typeStats);
console.log("Interface Extension Stats:", interfaceStats);

import { performance } from "perf_hooks";
import { JSDOM } from "jsdom";

const { window } = new JSDOM("<html><body></body></html>");
const { document } = window;

export function measureInterfacePerformance(iterations: number): number[] {
  const interfaceTimes: number[] = [];

  for (let i = 0; i < iterations; i++) {
    const interfaceStart = performance.now();

    for (let j = 0; j < 1000; j++) {
      interface ExtendedDivInterface extends HTMLDivElement {
        customProperty: string;
      }
      const divInterface: ExtendedDivInterface = Object.assign(
        document.createElement("div"),
        {
          customProperty: `Interface Property ${j}`,
        }
      );
    }

    const interfaceEnd = performance.now();
    interfaceTimes.push(interfaceEnd - interfaceStart);
  }

  return interfaceTimes;
}

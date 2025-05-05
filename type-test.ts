import { performance } from "perf_hooks";
import { JSDOM } from "jsdom";

const { window } = new JSDOM("<html><body></body></html>");
const { document } = window;

export function measureTypePerformance(iterations: number): number[] {
  const typeTimes: number[] = [];

  for (let i = 0; i < iterations; i++) {
    const typeStart = performance.now();

    for (let j = 0; j < 1000; j++) {
      type ExtendedDivType = HTMLDivElement & {
        customProperty: string;
      };
      const divType: ExtendedDivType = Object.assign(
        document.createElement("div"),
        {
          customProperty: `Type Property ${j}`,
        }
      );
    }

    const typeEnd = performance.now();
    typeTimes.push(typeEnd - typeStart);
  }

  return typeTimes;
}

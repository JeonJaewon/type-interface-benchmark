import { JSDOM } from "jsdom";

// Set up a simulated browser environment
const { window } = new JSDOM("<html><body></body></html>");
const { document } = window;

// Extending HTMLDivElement with a type
console.time("Type Extension");
type ExtendedDivType = HTMLDivElement & {
  customProperty: string;
};
const divType: ExtendedDivType = Object.assign(document.createElement("div"), {
  customProperty: "Type Property",
});
console.timeEnd("Type Extension");

// Extending HTMLDivElement with an interface
console.time("Interface Extension");
interface ExtendedDivInterface extends HTMLDivElement {
  customProperty: string;
}
const divInterface: ExtendedDivInterface = Object.assign(
  document.createElement("div"),
  {
    customProperty: "Interface Property",
  }
);
console.timeEnd("Interface Extension");

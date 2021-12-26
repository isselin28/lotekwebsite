import { size } from "./themes.js";

export function isMobileDevice() {
  return window.innerWidth <= size.desktop;
}

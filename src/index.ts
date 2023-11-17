import { ExtensionContext } from "@foxglove/studio";
import { initSonarPanel } from "./SonarPanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({ name: "Sonar-Panel", initPanel: initSonarPanel });
}

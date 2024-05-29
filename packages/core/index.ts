import {makeInstaller} from "@embrace-ui/utils";
import component from "./component.ts";
const installer = makeInstaller(component)
import '@embrace-ui/theme-chalk/src/index.scss'
export * from "@embrace-ui/components"

export default installer

import Button from "./src/button.vue";
import {withInstall} from "@embrace-ui/utils";

const EButton = withInstall(Button)

export default EButton

export type ButtonInstance = InstanceType<typeof Button>

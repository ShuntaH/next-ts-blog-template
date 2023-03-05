// my main theme entrypoint
import { extendTheme } from '@chakra-ui/react'
import config from "theme/config";
import { Link } from "theme/components/link";

/**
 * ここにtheme配下のディレクトリにある全てのファイルを集約する
 */
const overrides = {
  config,
  // styles: {
  //   global: STYLES
  // },
  components: {
    // Other components go here
    Link,
  },
}
// console.log('override', overrides)
export default extendTheme(overrides)

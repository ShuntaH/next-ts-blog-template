// my main theme entrypoint
import { extendTheme } from '@chakra-ui/react'
import { STYLES } from "lib/constants";
import config from "theme/config";
import { BreadcrumbLink } from "theme/components/breadcrumb";
import { Link } from "theme/components/link";

/**
 * ここにtheme配下のディレクトリにある全てのファイルを集約する
 */
const overrides = {
  config,
  // styles,
  styles: {
    global: STYLES
  },
  components: {
    // Other components go here
    Link,
    BreadcrumbLink

  },
}
// console.log('override', overrides)
export default extendTheme(overrides)

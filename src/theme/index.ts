// my main theme entrypoint
import { extendTheme } from '@chakra-ui/react'
import { Link } from 'theme/components/link'

/**
 * ここにtheme配下のディレクトリにある全てのファイルを集約する
 */
const overrides = {
  // config,
  // styles: {
  //   global: STYLES
  // },
  components: {
    // Other components go here
    Link
  }
}
export default extendTheme(overrides)

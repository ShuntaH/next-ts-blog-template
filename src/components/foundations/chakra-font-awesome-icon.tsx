import { chakra } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// todo headでseoを設定したあたりからアイコンがiタグではなくて、svgになってしまう。fontSizeが効かなくなる。widthで変更する。
const ChakraFontAwesomeIcon = chakra(FontAwesomeIcon)
export default ChakraFontAwesomeIcon

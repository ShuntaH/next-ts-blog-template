import { ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  // 背景が画像で固定しているのでcolor mode 使っていない。
  // 書いてあるが _document.tsx で読み込んでいない。この設定は削除しても良い。
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
}

export default config

/**
 * サーバーとクライアントどちらで動いているか
 */
export const serverOrBrowser = (): string => {
  try {
    window.location
  } catch (e: any) {
    return `server (${e.message})`
  }
  return 'browser'
}


/**
 * 開発時だけログを出力する。
 * @param args
 * @param isOutput 開発時でもログを出力するかどうか
 */
export const devLog = (args: any[], isOutput: boolean = true): void => {
  if (process.env.NODE_ENV === 'development' && isOutput) {
    console.log(serverOrBrowser(), ...args)
  }
}

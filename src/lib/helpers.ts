/**
 * サーバーとクライアントどちらで動いているか
 */
export function serverOrBrowser(): string {

  try {
    window.location
  } catch (e: any) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `server (${e.message})`
  }
  return 'browser'
}

/**
 * 開発時だけログを出力する。
 * @param args
 * @param options
 */
export function devLog(
  args: any[],
  options = {
    isOutput: true,
    logType: 'log'
  }
): void {
  if (process.env.NODE_ENV === 'development' && options.isOutput) {
    if (options.logType === 'error') {
      console.error(serverOrBrowser(), ...args)
      return
    }
    if (options.logType === 'info') {
      console.info(serverOrBrowser(), ...args)
      return
    }
    console.log(serverOrBrowser(), ...args)
  }
}

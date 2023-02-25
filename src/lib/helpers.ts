/**
 * サーバーとクライアントどちらで動いているか
 */
export function serverOrBrowser(): string {
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
export function devLog(args: any[], isOutput: boolean = true): void {
  if (process.env.NODE_ENV === 'development' && isOutput) {
    console.log(serverOrBrowser(), ...args)
  }
}

export function debounce<F extends ((...args: any) => any)>(func: F, timeout = 200) {
  let timer: NodeJS.Timeout
  devLog([ '初回だけ' ])
  const debounced = (...args: any) => {
    devLog([ 'timer', `${timer}` ])
    clearTimeout(timer)
    devLog([ 'timer', `${timer}` ])
    timer = setTimeout(() => {
      devLog([ 'timer in settimeout', `${timer}` ])
      func(...args)
      devLog([ 'debounce called', `${timeout}ms` ])
    }, timeout)
    devLog([ 'timer after set', `${timer}` ])
  }
  return debounced as (...args: Parameters<F>) => ReturnType<F>
}

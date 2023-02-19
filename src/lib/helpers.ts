export const serverOrBrowser = (): string => {
  try {
    window.location
  } catch (e: any) {
    return `server (${e.message})`
  }
  return 'browser'
}

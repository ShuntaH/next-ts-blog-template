/**
 * colorSchema には color の数字部分がないので それを取り除く
 *
 * e.g.
 * color gray.500 -> colorSchema gray
 * @param color
 */
export const colorToColorSchema = (color: string) => {
  return color.replace(/\..+$/, '')
}

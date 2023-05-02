export const truncate = (text: string, n: number) => {
  const result = text.length > n ? text.substr(0, n - 1) + '...' : text
  console.log(result)
  return result
}

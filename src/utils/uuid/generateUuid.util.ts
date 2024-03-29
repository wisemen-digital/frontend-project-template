export function generateUuid<T extends string>(): T {
  // Public Domain/MIT
  let d = new Date().getTime() // Timestamp
  // Time in microseconds since page-load or 0 if unsupported
  // eslint-disable-next-line ts/strict-boolean-expressions
  let d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 // random number between 0 and 16

    if (d > 0) {
      // Use timestamp until depleted
      r = (d + r) % 16 | 0
      d = Math.floor(d / 16)
    }
    else {
      // Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0
      d2 = Math.floor(d2 / 16)
    }

    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })

  return uuid as unknown as T
}

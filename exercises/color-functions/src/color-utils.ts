// Helpers
const intToHex = (n: number): string => {
  const constrained = Math.max(0, Math.min(255, n))
  const result = parseInt(constrained + '', 10).toString(16)
  return result.length === 1 ? '0' + result : result
}

const hexToInt = (hex: string): number => {
  return hex.length === 1 ? parseInt(hex + hex, 16) : parseInt(hex, 16)
}

// TODO: Implement hexToRgb
export function hexToRgb(hex: string): {r: number, g: number, b: number} {
  if (hex.length === 3) {
    return {
      r: hexToInt(hex[0]),
      g: hexToInt(hex[1]),
      b: hexToInt(hex[2])
    }
  } else {
    return {
      r: hexToInt(hex.substring(0, 2)),
      g: hexToInt(hex.substring(2, 4)),
      b: hexToInt(hex.substring(4, 6))
    }
  }
}

// TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number) {
  return intToHex(r) + intToHex(g) + intToHex(b)
}

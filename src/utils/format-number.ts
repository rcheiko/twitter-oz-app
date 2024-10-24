const roundDown = (number: number, decimalPlaces: number): number => {
  const numStr = number.toString()
  const decimalPointIndex = numStr.indexOf('.')
  if (decimalPointIndex === -1) return number
  const requiredLength = decimalPointIndex + 1 + decimalPlaces
  const cutNumber = numStr.slice(0, Math.min(requiredLength, numStr.length))
  return parseFloat(cutNumber)
}

export const formatNumber = ({
  num,
  decimals = 2,
  unit
}: {
  num: number | undefined | null
  decimals?: number
  unit?: boolean | 'full' | 'abbreviated'
}): string | undefined => {
  if (num === undefined || num === null) return undefined

  const threshold = 1e-6
  if (Math.abs(num) < threshold) return '0'

  let formattedNumber = roundDown(num, decimals)
  const formatOptions = { minimumFractionDigits: decimals, maximumFractionDigits: decimals }

  if (!unit || unit === 'full') {
    if (Number.isInteger(formattedNumber)) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(formattedNumber)
    }
    return new Intl.NumberFormat('en-US', formatOptions).format(formattedNumber)
  }

  const units = [
    { value: 1_000_000_000, symbol: 'b' },
    { value: 1_000_000, symbol: 'm' },
    { value: 1_000, symbol: 'k' }
  ]

  const matchedUnit = units.find(u => num >= u.value)
  if (matchedUnit) {
    formattedNumber = roundDown(num / matchedUnit.value, decimals)
    return formattedNumber.toString().replace(/\.0+$/, '') + matchedUnit.symbol
  }

  if (Number.isInteger(formattedNumber)) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(formattedNumber)
  }

  return new Intl.NumberFormat('en-US', formatOptions).format(formattedNumber)
}
import { defaultTheme } from 'styles/theme'

const customMediaQuery = minWidth => `@media (min-width: ${minWidth}px)`

const numberBreakpoints = defaultTheme.breakpoints.map(str => Number(str.replace(/[^0-9.]+/g, '')))

export const media = {
  custom: customMediaQuery,
  sm: customMediaQuery(numberBreakpoints[0]),
  smXl: customMediaQuery(numberBreakpoints[1]),
  md: customMediaQuery(numberBreakpoints[2]),
  lg: customMediaQuery(numberBreakpoints[3]),
  xl: customMediaQuery(numberBreakpoints[4]),
}

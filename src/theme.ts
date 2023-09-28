
import { create } from 'zustand'
import { Theme as EmotionTheme } from '@emotion/react'

export const fontSizes = {
  xs: '1rem',
  sm: '1.2rem',
  base: '1.4rem',
  lg: '1.6rem',
  xl: '1.8rem',
  '2xl': '2rem',
  '3xl': '2.5rem',
  '4xl': '3rem',
}

export const fontWeights = (size: keyof typeof fontSizes) => {
  switch (size) {
    case 'xs':
      return 400
    case 'sm':
      return 400
    case 'base':
      return 400
    case 'lg':
      return 400
    case 'xl':
      return 500
    case '2xl':
      return 500
    case '3xl':
      return 500
    case '4xl':
      return 600
  }
}

export const colors = {
  green: '#21bba6',
  dark_blue: '#0084b4',
  blue: '#1da1f2',
  light_blue: '#76c5f5',
  sky: '#e8f5fd',
  purple: '#494763',
  black: '#171717',
  jetBlack: '#070707',
  darkgrey: '#D1D1D1',
  grey: '#EEEEEE',
  eggshell: '#F8F8F8',
  seagrey: '#cddadf',
  lightgrey: '#e9ecef',
  white: '#fff',
  blur: 'rgba(247, 249, 249, 0.1)'
}

export const darkColors = {
  darkblue: '#161627',
  slate: '#1A202C',
  midnight: '#28324a',
  lightblue: '#343f52',
  lightgrey: '#3D4760',
  darkgrey: '#292D34',
  grey: '#d9d9d9'
}

export const lightTheme = {
  colorScheme: 'light',
  colors: {
    jetBlack: colors.jetBlack,
    primaryOpposite: colors.white,
    primary: colors.black,
    secondary: colors.dark_blue,
    third: colors.blue,
    active: colors.blue,
    secondaryActive: colors.light_blue,
    inactive: 'rgb(139, 152, 165)',
    secondaryInactive: 'rgb(113, 118, 123)',
    backgroundPrimary: colors.white,
    backgroundSecondary: colors.lightgrey,
    backgroundTertiary: colors.eggshell,
    backgroundQuaternary: colors.eggshell,
    borderPrimary: '#eeeeee',
    progressBar: colors.green,
    errorPrimary: '#DB2525', // 'rgb(255, 40, 40)',
    backgroundError: 'rgb(214, 77, 77)',
    blur: 'rgba(240, 240, 240, 0.3)'
  }
} as const

export const darkTheme = {
  colorScheme: 'dark',
  colors: {
    jetBlack: colors.jetBlack,
    primaryOpposite: colors.black,
    primary: colors.white,
    secondary: colors.dark_blue,
    third: colors.blue,
    active: colors.blue,
    secondaryActive: colors.light_blue,
    secondaryInactive: 'rgb(113, 118, 123)',
    inactive: 'rgb(139, 152, 165)',
    backgroundPrimary: '#1A202B',
    backgroundSecondary: darkColors.midnight,
    backgroundTertiary: '#1D2431',
    backgroundQuaternary: '#374055',
    borderPrimary: 'rgba(255, 255, 255, 0.1)',
    progressBar: colors.green,
    errorPrimary: '#db4c4c', // 'rgb(255, 40, 40)',
    backgroundError: 'rgb(214, 77, 77)',
    blur: 'rgba(255, 255, 255, 0.03)'
  }
} as const

const themes = [lightTheme, darkTheme]

export type Theme = EmotionTheme & typeof lightTheme | typeof darkTheme

export const useTheme = create(() =>
  themes.find(({ colorScheme }) => colorScheme === localStorage.getItem('theme')) ??
  (
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? darkTheme
      : lightTheme
  )
)

export const toggleTheme = () => useTheme.setState(state => state.colorScheme === 'light' ? darkTheme : lightTheme)

useTheme.subscribe(state => localStorage.setItem('theme', state.colorScheme))
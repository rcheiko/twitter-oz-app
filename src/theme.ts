
import { create } from 'zustand'
import { Theme as EmotionTheme } from '@emotion/react'

export const colors = {
  green: '#21bba6',
  blue: '#488ecb',
  purple: '#494763',
  black: '#171717',
  jetBlack: '#070707',
  darkgrey: '#D1D1D1',
  grey: '#EEEEEE',
  eggshell: '#F8F8F8',
  seagrey: '#cddadf',
  lightgrey: '#e9ecef',
  white: '#fff'
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
    primary: colors.black,
    secondary: colors.purple,
    active: colors.green,
    tertiaryActive: '#6157C5',
    inactive: '#D1D1D1',
    secondaryActive: colors.blue,
    backgroundPrimary: colors.white,
    backgroundSecondary: colors.eggshell,
    backgroundTertiary: colors.eggshell,
    backgroundQuaternary: colors.eggshell,
    borderPrimary: '#eeeeee',
    borderSecondary: colors.grey,
    progressBar: colors.green,
    walletTagBackground: 'rgba(255, 255, 255, 0.65)',
    white: colors.white,
    errorPrimary: '#DB2525', // 'rgb(255, 40, 40)',
    backgroundError: 'rgb(214, 77, 77)'
  }
} as const

export const darkTheme = {
  colorScheme: 'dark',
  colors: {
    jetBlack: colors.jetBlack,
    primary: colors.white,
    secondary: colors.darkgrey,
    active: colors.green,
    tertiaryActive: '#9a96c4',
    inactive: '#D1D1D155',
    secondaryActive: colors.blue,
    backgroundPrimary: darkColors.darkblue,
    backgroundSecondary: darkColors.midnight,
    backgroundTertiary: '#2F3B58',
    backgroundQuaternary: '#374055',
    borderPrimary: 'rgba(255, 255, 255, 0.1)',
    borderSecondary: colors.grey,
    progressBar: colors.green,
    walletTagBackground: 'rgba(26, 32, 44, 0.75)',
    white: colors.white,
    errorPrimary: '#db4c4c', // 'rgb(255, 40, 40)',
    backgroundError: 'rgb(214, 77, 77)'
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
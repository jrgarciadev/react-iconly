import { useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import Router from 'next/router'
import DefaultLayout from '@layouts/default'
import GlobalStyles from '@styles/globals'
import theme from '@themes'
import { IconlyProvider } from 'react-iconly'
import 'react-tippy/dist/tippy.css'
import * as gtag from '@lib/gtag'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  const darkMode = useDarkMode()
  const nextTheme = darkMode.value ? 'dark' : 'light'
  useEffect(() => {
    document.body.dataset.theme = nextTheme
  }, [nextTheme])
  return (
    <ThemeProvider theme={theme}>
      <IconlyProvider primaryColor={theme.bg.reverse}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </IconlyProvider>
    </ThemeProvider>
  )
}

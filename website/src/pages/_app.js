import { ThemeProvider } from 'styled-components'
import Router from 'next/router'
import DefaultLayout from '@layouts/default'
import GlobalStyles from '@styles/globals'
import theme from '@themes/light'
import * as gtag from '@lib/gtag'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

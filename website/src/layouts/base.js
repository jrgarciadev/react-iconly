import Head from 'next/head'
import PropTypes from 'prop-types'

const BaseLayout = ({ children }) => {
  return (
    <div id='main'>
      <Head>
        <title>React Iconly | Pixel perfect icons </title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#200E32' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap'
          rel='stylesheet'
        />
        <meta
          name='viewport'
          key='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@jrgarciadev' />
        <meta
          property='og:site_name'
          content='React Iconly | Pixel perfect icons'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='React Iconly | Pixel perfect icons'
        />
        <meta property='og:locale' content='en' />
        <meta
          property='og:url'
          content='https://react-iconly.jrgarciadev.com'
        />
        <meta
          name='description'
          content='react-iconly is a collection of simply beautiful open source icons for React.js. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.'
        />
        <meta
          name='keywords'
          content='React, Javascript, Reac Componentes, Icons, Svg Icons, React Icon Kit, Iconly, Icon set'
        />
        <meta
          property='og:image'
          content='https://react-iconly.jrgarciadev.com/og_image.png'
        />
        <meta
          property='twitter:image'
          content='https://react-iconly.jrgarciadev.com/og_image.png'
        />
      </Head>
      {children}
    </div>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default BaseLayout

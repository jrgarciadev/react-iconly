import PropTypes from 'prop-types'
import Main from './main'
import BaseLayout from './base'
import Navbar from './navbar'

const DefaultLayout = ({ children }) => {
  return (
    <BaseLayout>
      <>
        <Navbar />
        <Main>{children}</Main>
      </>
    </BaseLayout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default DefaultLayout

import Layout from 'components/layout'
import 'styles/globals.css'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const MyApp = props => {
  return (
    <Layout>
      <props.Component {...props.pageProps} />
    </Layout>
  )
}
export default MyApp

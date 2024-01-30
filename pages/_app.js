import Layout from 'components/layout'
import 'styles/globals.css'

const MyApp = props => {
  return (
    <Layout>
      <props.Component {...props.pageProps} />
    </Layout>
  )
}
export default MyApp

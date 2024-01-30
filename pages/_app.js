import Layout from 'components/layout'

const MyApp = props => {
  return (
    <Layout>
      <props.Component {...props.pageProps} />
    </Layout>
  )
}
export default MyApp

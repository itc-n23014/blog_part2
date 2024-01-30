import Head from 'next/head'

const Meta = props => {
  return (
    <Head>
      <title>{props.pageTitle}</title>
      <meta property='og:title' content={props.pageTitle} />
    </Head>
  )
}
export default Meta

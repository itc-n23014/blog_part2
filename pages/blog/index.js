import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import { getAllPosts } from 'lib/api'
import Posts from 'components/posts'

const Blog = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle='ブログ' />
      <Hero title='Blog' subtitle='Recent Posts' />
      <Posts posts={posts} />
    </Container>
  )
}
export default Blog

export const getStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: {
      posts: posts
    }
  }
}

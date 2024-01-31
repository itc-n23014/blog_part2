import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Image from 'next/image'

const Schedule = props => {
  return (
    <Container>
      <article>
        <PostHeader
          title={props.title}
          subtitle='Blog Article'
          publish={props.publish}
        />
        <figure>
          <Image
            src={props.eyecatch.url}
            alt=''
            layout='responsive'
            width={props.eyecatch.width}
            height={props.eyecatch.height}
            sizes='(min-width: 1152px) 1152px, 100vw'
          />
        </figure>
      </article>
    </Container>
  )
}
export default Schedule

export const getStaticProps = async () => {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}

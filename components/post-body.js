import styles from 'styles/post-body.module.css'

const PostBody = props => {
  return <div className={styles.stack}>{props.children}</div>
}
export default PostBody

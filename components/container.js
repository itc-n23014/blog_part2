import styles from 'styles/container.module.css'

const Container = (props = { large: false }) => {
  return (
    <div className={props.large ? styles.large : styles.default}>
      {props.children}
    </div>
  )
}
export default Container

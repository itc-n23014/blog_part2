import styles from 'styles/two-column.module.css'

const TwoColumn = props => {
  return <div className={styles.flexContainer}>{props.children}</div>
}

const TwoColumnMain = props => {
  return <div className={styles.main}>{props.children}</div>
}

const TwoColumnSidebar = props => {
  return <div className={styles.sidebar}>{props.children}</div>
}

export { TwoColumn, TwoColumnMain, TwoColumnSidebar }

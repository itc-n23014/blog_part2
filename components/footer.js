import Logo from 'components/logo'
import styles from 'styles/footer.module.css'
import Container from 'components/container'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  )
}
export default Footer

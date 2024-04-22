import Heading from "./components/Heading/Heading"
import Editor from "./components/Editor/Editor"
import styles from './scss/home.module.scss'

const Home = () => {
 
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <Heading />
        <Editor />
      </div>
    </section>
  )
}

export default Home;

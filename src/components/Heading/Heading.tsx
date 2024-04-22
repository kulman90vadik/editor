import styles from './heading.module.scss'


const Heading = () => {
  return (
    <div className={styles.heading}>
      <h1 className={styles.title}>Editor + </h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img className={styles.image} src="images/react.svg" alt="React" />
        </li>
        <li>
          <img className={styles.image} src="images/ts.svg" alt="TS" />
        </li>
      </ul>
    </div>
  );
}
 
export default Heading;
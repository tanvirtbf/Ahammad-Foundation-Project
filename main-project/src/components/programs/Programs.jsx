import styles from './Programs.module.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.jpg'

const Programs = () => {
  return (
    <div className={styles.programs}>
      <div className={styles.program}>
        <img src={program1} alt="" />
      </div>
      <div className={styles.program}>
        <img src={program2} alt="" />
      </div>
      <div className={styles.program}>
        <img src={program3} alt="" />
      </div>
    </div>
  )
}

export default Programs

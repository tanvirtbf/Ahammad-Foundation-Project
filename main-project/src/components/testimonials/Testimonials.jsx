import styles from './Testimonials.module.css'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <img src={nextIcon} alt="" className={styles.nextBtn}/>
      <img src={backIcon} alt="" className={styles.backBtn}/>
    </div>
  )
}

export default Testimonials

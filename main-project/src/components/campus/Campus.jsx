import styles from './Campus.module.css'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const Campus = () => {
  return (
    <div className={styles.campus} id='campus'>
      <div className={styles.gallery}>
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className="btn dark-btn">See More Here <FaLongArrowAltRight /></button>
    </div>
  )
}

export default Campus


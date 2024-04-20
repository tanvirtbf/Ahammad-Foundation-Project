import styles from './Navbar.module.css'
import Logo from '../../assets/unnamed.jpg'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={Logo} alt="" className={styles.logo} />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li>
          <button className='btn'>Contact Us</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

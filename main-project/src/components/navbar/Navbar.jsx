import styles from './Navbar.module.css'
import Logo from '../../assets/unnamed.jpg'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
    <nav className={`container ${sticky ? styles.darkNav : '' }`}>
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

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Nav.css'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='nav'>
      <div className='nav-wrapper'>
        <Link
          className='link link-text'
          to={'/'}
        >
          Strona Główna
        </Link>
      </div>
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
        

        
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#1e272e'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav

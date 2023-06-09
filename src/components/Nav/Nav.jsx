import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Nav.css'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='nav'>
      <Link
        className='link'
        to={'/'}
      >
        <h1> Bookstore CMS</h1>
      </Link>
      <div className='wrapper'></div>
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
        <Link
          className='link'
          to={'/'}
        >
          <h1> BOOKS</h1>
        </Link>
        <Link
          className='link '
          to={'/categories'}
        >
          <h2> CATEGORIES</h2>
        </Link>
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

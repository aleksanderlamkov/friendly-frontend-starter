import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import Icon from '@/components/Icon'

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    className={clsx(
                      'header__menu-link',
                      href === url && 'is-active'
                    )}
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button className="header__button">
              <span>Search</span>
              <Icon name="search" />
            </Button>
            <Button className="header__button">
              <span>Notifications</span>
              <Icon name="notification" />
            </Button>
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}

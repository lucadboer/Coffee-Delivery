import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="Logomarca Coffee Delivery" />
      </a>
      <nav>
        <span>
          {' '}
          <MapPin weight="bold" size={20} /> Porte Alegre, RS
        </span>
        <a href="/checkout">
          <ShoppingCart size={20} />
        </a>
      </nav>
    </HeaderContainer>
  )
}

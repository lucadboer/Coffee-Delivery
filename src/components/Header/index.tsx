import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logomarca Coffee Delivery" />
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

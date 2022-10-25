import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/Logo.svg'

import { useCart } from '../../hooks/useCart'
import { HeaderContainer } from './styles'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="Logomarca Coffee Delivery" />
      </a>
      <nav>
        <span>
          {' '}
          <MapPin weight="fill" size={20} /> Monte Alto, SP
        </span>
        <a href="/checkout">
          <ShoppingCart weight="fill" size={20} />
          {cartQuantity ? <span>{cartQuantity}</span> : null}
        </a>
      </nav>
    </HeaderContainer>
  )
}

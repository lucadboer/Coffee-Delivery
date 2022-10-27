import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/Logo.svg'

import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { HeaderContainer } from './styles'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logomarca Coffee Delivery" />
      </NavLink>
      <nav>
        <span>
          {' '}
          <MapPin weight="fill" size={20} /> Monte Alto, SP
        </span>
        <NavLink to="/checkout">
          <ShoppingCart weight="fill" size={20} />
          {cartQuantity ? <span>{cartQuantity}</span> : null}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

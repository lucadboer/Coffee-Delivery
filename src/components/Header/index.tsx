import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext } from 'react'

import logo from '../../assets/Logo.svg'
import { CartContext } from '../../context/CartContext'
import { HeaderContainer } from './styles'

export function Header() {
  const { quantityItemsOnCart } = useContext(CartContext)

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
          {quantityItemsOnCart ? <span>{quantityItemsOnCart}</span> : null}
        </a>
      </nav>
    </HeaderContainer>
  )
}

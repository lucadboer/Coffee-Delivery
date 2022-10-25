import { Trash } from 'phosphor-react'
import { SetQuantityCoffee } from '../../../../components/SetQuantityCoffee'
import { CartItem } from '../../../../context/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { CoffeeContainer, CoffeeStatus, DeleteCoffee, Price } from './styles'

interface CoffeeInCart {
  coffee: CartItem
}

export function Coffee({ coffee }: CoffeeInCart) {
  const { changeCartItemQuantity, removeItemInCart } = useCart()

  function handleIncreaseCoffee() {
    changeCartItemQuantity(coffee.id, 'Increase')
  }

  function handleDecreaseCoffee() {
    changeCartItemQuantity(coffee.id, 'Decrease')
  }

  function handleDeleteCoffee() {
    removeItemInCart(coffee.id)
  }

  const coffeePriceTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(coffeePriceTotal)

  return (
    <CoffeeContainer>
      <img src={`/coffees/${coffee.photo}.svg`} alt="" />
      <main>
        <h3>{coffee.name}</h3>
        <CoffeeStatus>
          <SetQuantityCoffee
            quantity={coffee.quantity}
            onIncrease={handleIncreaseCoffee}
            onDecrease={handleDecreaseCoffee}
          />
          <DeleteCoffee onClick={handleDeleteCoffee}>
            <span>
              <Trash size={16} />
            </span>{' '}
            REMOVER
          </DeleteCoffee>
        </CoffeeStatus>
      </main>
      <Price>R$ {formattedPrice}</Price>
    </CoffeeContainer>
  )
}

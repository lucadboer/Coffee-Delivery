import { ShoppingCartSimple } from 'phosphor-react'
import { CoffeeCardContainer, FooterCard } from './styles'
import { SetQuantityCoffee } from '../../../../components/SetQuantityCoffee'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'
// import { CartContext, Coffee } from '../../../../context/CartContext'

export interface Coffee {
  id: number
  photo: string
  categories: string[]
  name: string
  subtitle: string
  price: number
  quantity: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  const formattedPrice = formatMoney(coffee.price)

  const { addNewCoffeeToCart } = useCart()

  function handleIncrease() {
    setQuantity((state) => {
      if (quantity >= 1) {
        return state + 1
      }
      return state
    })
  }

  function handleDecrease() {
    setQuantity((state) => {
      if (quantity !== 1) {
        return state - 1
      }
      return state
    })
  }

  function handleAddNewCoffeeToCart() {
    event?.preventDefault()
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addNewCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}.svg`} />
      <ul>
        {coffee.categories.map((categorie) => {
          return <li key={`${coffee.id}${categorie}`}>{categorie}</li>
        })}
      </ul>
      <h3>{coffee.name}</h3>
      <p>{coffee.subtitle}</p>
      <FooterCard>
        <span>
          R$
          <span>{formattedPrice}</span>
        </span>
        <form>
          <SetQuantityCoffee
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <button type="submit" onClick={handleAddNewCoffeeToCart}>
            <ShoppingCartSimple size={20} weight="fill" />
          </button>
        </form>
      </FooterCard>
    </CoffeeCardContainer>
  )
}

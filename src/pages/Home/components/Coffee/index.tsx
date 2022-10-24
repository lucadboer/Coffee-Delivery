import { ShoppingCartSimple } from 'phosphor-react'
import { CoffeeCardContainer, FooterCard } from './styles'
import { SetQuantityCoffee } from '../../../../components/SetQuantityCoffee'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
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
  const formattedPrice = formatMoney(coffee.price)

  const { addNewCoffeeToCart } = useCart()

  function handleAddNewCoffeeToCart() {
    event?.preventDefault()
    const coffeeToAdd = {
      ...coffee,
      quantity: 1,
    }
    addNewCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}.svg`} />
      <ul>
        {coffee.categories.map((categorie) => {
          return (
            <li key={`${coffee.categories}${coffee.photo}`}>{categorie}</li>
          )
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
          <SetQuantityCoffee />

          <button type="submit" onClick={handleAddNewCoffeeToCart}>
            <ShoppingCartSimple size={20} weight="fill" />
          </button>
        </form>
      </FooterCard>
    </CoffeeCardContainer>
  )
}

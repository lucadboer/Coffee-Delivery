import { ShoppingCartSimple } from 'phosphor-react'
import { CoffeeCard, FooterCard } from './styles'
import { SetQuantityCoffee } from '../../../../components/SetQuantityCoffee'
import { useContext } from 'react'
import { CartContext, CoffeeProps } from '../../../../context/CartContext'

export function Coffee(props: CoffeeProps) {
  const { changeQuantityCart, addNewCoffeeOnCart } = useContext(CartContext)

  function handleAddNewCoffeeOnCart() {
    event?.preventDefault()
    changeQuantityCart(props.id)
    addNewCoffeeOnCart(props.id)
  }

  return (
    <CoffeeCard>
      <img src={`/coffees/${props.imgUrl}.svg`} alt="" />
      <ul>
        {props.categories.map((categorie) => {
          return <li key={categorie}>{categorie}</li>
        })}
      </ul>
      <h3>{props.name}</h3>
      <p>{props.subtitle}</p>
      <FooterCard>
        <span>
          R$
          <span>{props.price}0</span>
        </span>
        <form>
          <SetQuantityCoffee />

          <button type="submit" onClick={handleAddNewCoffeeOnCart}>
            <ShoppingCartSimple size={20} weight="fill" />
          </button>
        </form>
      </FooterCard>
    </CoffeeCard>
  )
}

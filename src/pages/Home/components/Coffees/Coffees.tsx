import { ShoppingCartSimple } from 'phosphor-react'
import { CoffeeCard, FooterCard } from './styles'
import coffee1 from '../../../../assets/coffees/Image.svg'
import { SetQuantityCoffee } from '../../../../components/SetQuantityCoffee'

export function Coffees() {
  return (
    <CoffeeCard>
      <img src={coffee1} />
      <ul>
        <li>Tradicional</li>
        <li>Alcoólico</li>
        <li>Especial</li>
      </ul>
      <h3>Expresso Adicional</h3>
      <p>O tradicional café feito com água quente e grãos moidos</p>
      <FooterCard>
        <span>
          R$
          <span>9,90</span>
        </span>
        <form>
          <SetQuantityCoffee />

          <button type="submit">
            <ShoppingCartSimple size={20} />
          </button>
        </form>
      </FooterCard>
    </CoffeeCard>
  )
}

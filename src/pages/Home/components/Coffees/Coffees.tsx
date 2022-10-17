import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CoffeeCard, FooterCard } from './styles'
import coffee1 from '../../../../assets/coffees/Image.svg'
import { useState } from 'react'

export function Coffees() {
  const [quantityCoffee, setQuantityCoffee] = useState(1)

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
          <div>
            <button
              type="button"
              onClick={() => {
                setQuantityCoffee((state) => {
                  if (quantityCoffee > 1) {
                    return state - 1
                  }
                  return state
                })
              }}
            >
              <Minus size={14} />
            </button>
            <input type="number" value={quantityCoffee} name="quantity" />
            <button
              type="button"
              onClick={() => {
                setQuantityCoffee((state) => {
                  return state + 1
                })
              }}
            >
              <Plus size={14} />
            </button>
          </div>
          <button type="submit">
            <ShoppingCartSimple size={20} />
          </button>
        </form>
      </FooterCard>
    </CoffeeCard>
  )
}

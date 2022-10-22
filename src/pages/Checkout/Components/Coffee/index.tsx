import { Trash } from 'phosphor-react'
import { SetQuantityCoffee } from '../../../../components/SetQuantityCoffee'
import { CoffeeContainer, CoffeeStatus, DeleteCoffee, Price } from './styles'

export function Coffee() {
  return (
    <CoffeeContainer>
      <img src={`/coffees/Latte.svg`} alt="" />
      <main>
        <h3>Expresso Tradicional</h3>
        <CoffeeStatus>
          <SetQuantityCoffee />
          <DeleteCoffee>
            <span>
              <Trash size={16} />
            </span>{' '}
            REMOVER
          </DeleteCoffee>
        </CoffeeStatus>
      </main>
      <Price>R$ 9,90</Price>
    </CoffeeContainer>
  )
}

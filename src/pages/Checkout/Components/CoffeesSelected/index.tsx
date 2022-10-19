import { Coffee } from '../Coffee'
import { CoffeeOnCartContainer } from './styles'

export function CoffeeSelected() {
  return (
    <div>
      <CoffeeOnCartContainer>
        <Coffee />
        <Coffee />

        <footer>
          <div>
            <span>
              Total de itens <span>R$ 29,70</span>
            </span>
            <span>
              Entrega <span>R$ 3,50</span>
            </span>
            <h3>
              Total <span>R$ 33,20</span>
            </h3>
          </div>

          <button form="address">Confirmar Pedido</button>
        </footer>
      </CoffeeOnCartContainer>
    </div>
  )
}

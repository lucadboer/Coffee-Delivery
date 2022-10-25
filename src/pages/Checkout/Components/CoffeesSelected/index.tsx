import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { Coffee } from '../Coffee'
import { CoffeeOnCartContainer } from './styles'

export function CoffeeSelected() {
  const { cartPriceItemsTotal, cartQuantity, cartItems } = useCart()

  const DELIVERY_PRICE = 3.5

  const cartTotal = cartPriceItemsTotal + DELIVERY_PRICE

  const formattedPriceItemsTotal = formatMoney(cartPriceItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <div>
      <CoffeeOnCartContainer>
        {cartItems.map((item) => {
          return <Coffee key={item.id} coffee={item} />
        })}
        <footer>
          <div>
            <span>
              Total de itens <span>R$ {formattedPriceItemsTotal}</span>
            </span>
            <span>
              Entrega <span>R$ {formattedDeliveryPrice}</span>
            </span>
            <h3>
              Total <span>R$ {formattedCartTotal}</span>
            </h3>
          </div>

          <button form="address" disabled={cartQuantity <= 0}>
            Confirmar Pedido
          </button>
        </footer>
      </CoffeeOnCartContainer>
    </div>
  )
}

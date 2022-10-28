import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { Coffee } from '../Coffee'

import { CoffeeOnCartContainer } from './styles'

export function CoffeeSelected() {
  const { cartPriceItemsTotal, cartQuantity, cartItems } = useCart()

  const navigate = useNavigate()

  const DELIVERY_PRICE = 3.5

  const cartTotal = cartPriceItemsTotal + DELIVERY_PRICE

  const formattedPriceItemsTotal = formatMoney(cartPriceItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  function cartIsEmpity() {
    if (cartQuantity <= 0) {
      swal({
        title: 'Seu carrinho está vazio!',
        text: 'Deseja adicionar items no carrinho na nossa página de cafés?',
        icon: '',
        buttons: ['Não', 'Ir para a página'],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          navigate('/')
        }
      })
    }
  }

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

          <button form="address" onClick={cartIsEmpity}>
            Confirmar Pedido
          </button>
        </footer>
      </CoffeeOnCartContainer>
    </div>
  )
}

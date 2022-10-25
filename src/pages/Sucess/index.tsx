import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import delivery from '../../assets/Delivery.svg'
import { OrderAddressType } from '../Checkout'
import {
  OrderAddressContainer,
  OrderInformationContainer,
  OrderPaymentContainer,
  OrderTimeDeliveryContainer,
  SucessContainer,
} from './styles'

interface LocationType {
  state: OrderAddressType
}

export function Sucess() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <div>
      <SucessContainer>
        <header>
          <h1>Uhu! Pedido Confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </header>
        <main>
          <OrderInformationContainer>
            <OrderAddressContainer>
              <MapPin size={16} />
              <div>
                <p>
                  Entrega em{' '}
                  <span>
                    {state.road}, {state.number}
                  </span>
                </p>
                <p>
                  {state.district} - {state.city}, {state.state}
                </p>
              </div>
            </OrderAddressContainer>

            <OrderTimeDeliveryContainer>
              <Timer size={16} />
              <div>
                <span>Previsão de entrega</span>
                <h4>20 min - 30 min</h4>
              </div>
            </OrderTimeDeliveryContainer>

            <OrderPaymentContainer>
              <CurrencyDollar size={16} />
              <div>
                <p>Pagamento na entrega</p>
                <h4>Cartão de crédito</h4>
              </div>
            </OrderPaymentContainer>
          </OrderInformationContainer>
          <img src={delivery} alt="Foto do entregador" />
        </main>
      </SucessContainer>
    </div>
  )
}

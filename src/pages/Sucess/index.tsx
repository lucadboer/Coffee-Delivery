import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import delivery from '../../assets/Delivery.svg'
import { OrderAddressContext } from '../../context/OrderAddressContext'
import {
  OrderAddressContainer,
  OrderInformationContainer,
  OrderPaymentContainer,
  OrderTimeDeliveryContainer,
  SucessContainer,
} from './styles'

export function Sucess() {
  const { orderConfirmed } = useContext(OrderAddressContext)

  useEffect(() => {
    orderConfirmed()
  }, [])

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
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
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

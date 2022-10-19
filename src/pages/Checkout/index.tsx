import { CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import {
  AddressContainer,
  CEPForm,
  CheckoutContainer,
  FormAddressCityState,
  FormNumberComplement,
  HeaderAddress,
  PaymentContainer,
  PaymentsMethods,
  RuaForm,
} from './styles'
import { CoffeeSelected } from './Components/CoffeesSelected'

export function Checkout() {
  return (
    <div>
      <CheckoutContainer>
        <div>
          <h2>Complete seu pedido</h2>
          <AddressContainer>
            <HeaderAddress>
              <h3>
                <MapPinLine size={22} /> Endereço de Entrega
              </h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </HeaderAddress>
            <form id="address" action="/sucess">
              <CEPForm type="number" placeholder="CEP" /* required */ />
              <RuaForm
                type="text"
                placeholder="Rua"
                autoComplete="true"
                /* required
                 */
              />
              <FormNumberComplement>
                <input type="text" placeholder="Número" /* required */ />
                <input type="text" placeholder="Complemento" />
              </FormNumberComplement>
              <FormAddressCityState>
                <input type="text" placeholder="Bairro" /* required */ />
                <input type="text" placeholder="Cidade" /* required */ />
                <input type="text" placeholder="UF" /* required */ />
              </FormAddressCityState>
            </form>
          </AddressContainer>

          <PaymentContainer>
            <h3>
              <CurrencyDollar size={22} /> Pagamento
            </h3>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar!
            </span>

            <PaymentsMethods>
              <ToggleGroup.Root type="single">
                <ToggleGroup.Item value="credit">
                  <CreditCard size={16} /> Cartão de Crédito
                </ToggleGroup.Item>
                <ToggleGroup.Item value="debbit">
                  <CreditCard size={16} /> Cartão de Débito
                </ToggleGroup.Item>
                <ToggleGroup.Item value="money">
                  <Money size={16} /> Dinheiro
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </PaymentsMethods>
          </PaymentContainer>
        </div>

        <div>
          <h2>Cafés selecionados</h2>

          <div>
            <CoffeeSelected />
          </div>
        </div>
      </CheckoutContainer>
    </div>
  )
}

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

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CoffeeSelected } from './Components/CoffeesSelected'

interface ErrorsTypes {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

const newOrderFormValidationSchemma = zod.object({
  cep: zod.string().min(8, 'Informe o CEP').max(10),
  road: zod.string().min(3).max(80),
  number: zod.string().min(1).max(6),
  Complement: zod.string(),
  district: zod.string().min(3).max(20),
  city: zod.string().min(3).max(15),
  state: zod.string().min(2).max(30),
})

export function Checkout() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(newOrderFormValidationSchemma),
    defaultValues: {
      cep: '',
      road: '',
      number: '',
      Complement: '',
      district: '',
      city: '',
      state: '',
    },
  })

  const { errors } = formState as unknown as ErrorsTypes

  type newOrderConfirmed = zod.infer<typeof newOrderFormValidationSchemma>

  function handleConfirmedOrder(data: newOrderConfirmed) {
    // orderConfirmed(data)

    console.log(data)
  }

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
            <form
              id="address"
              onSubmit={handleSubmit(handleConfirmedOrder)}
              action="/sucess"
            >
              <CEPForm
                placeholder="CEP"
                min={8}
                {...register('cep')}
                required
              />
              <RuaForm
                placeholder="Rua"
                autoComplete="true"
                {...register('road')}
              />
              <FormNumberComplement>
                <input placeholder="Número" {...register('number')} />
                <input placeholder="Complemento" {...register('Complement')} />
              </FormNumberComplement>

              <FormAddressCityState>
                <input placeholder="Bairro" {...register('district')} />
                <input placeholder="Cidade" {...register('city')} />
                <input placeholder="UF" {...register('state')} />
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
                <ToggleGroup.Item value="credit" /* {...register('payment')} */>
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

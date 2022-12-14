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
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useEffect, useState } from 'react'

export interface OrderAddressType {
  road: string
  number: string
  district: string
  city: string
  state: string
  payment: string
}

// interface ErrorsTypes {
//   errors: {
//     [key: string]: {
//       message: string
//     }
//   }
// }

const newOrderFormValidationSchemma = zod.object({
  cep: zod.string().min(8, 'Informe o CEP').max(10),
  road: zod.string().min(3).max(80),
  number: zod.string().min(1).max(6),
  Complement: zod.string(),
  district: zod.string().min(3).max(20),
  city: zod.string().min(3).max(15),
  state: zod.string().min(2).max(30),
  payment: zod.string(),
})

export function CompleteOrderPage() {
  const [paymentType, setPaymentType] = useState('')

  const { changePaymentType } = useCart()

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(newOrderFormValidationSchemma),
    defaultValues: {
      cep: '',
      road: '',
      number: '',
      Complement: '',
      district: '',
      city: '',
      state: '',
      payment: '',
    },
  })

  // const { errors } = formState as unknown as ErrorsTypes

  type newOrderConfirmed = zod.infer<typeof newOrderFormValidationSchemma>

  useEffect(() => {
    changePaymentType('')
    console.log(paymentType)
  }, [])

  const navigate = useNavigate()

  const { cleanCart, cartItems } = useCart()

  function handleConfirmedOrder(data: newOrderConfirmed) {
    if (cartItems.length <= 0) {
      return cartItems
    }

    if (paymentType === '') {
      alert('Selecione a forma de pagamento...')
      return paymentType
    }

    changePaymentType(paymentType)

    navigate('/sucess', {
      state: data,
    })

    cleanCart()
  }

  return (
    <div>
      <CheckoutContainer>
        <div>
          <h2>Complete seu pedido</h2>
          <AddressContainer>
            <HeaderAddress>
              <h3>
                <MapPinLine size={22} /> Endere??o de Entrega
              </h3>
              <span>Informe o endere??o onde deseja receber seu pedido</span>
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
                required
              />
              <FormNumberComplement>
                <input placeholder="N??mero" {...register('number')} required />
                <input
                  placeholder="Complemento (opcional)"
                  {...register('Complement')}
                />
              </FormNumberComplement>

              <FormAddressCityState>
                <input
                  placeholder="Bairro"
                  {...register('district')}
                  required
                />
                <input placeholder="Cidade" {...register('city')} required />
                <input placeholder="UF" {...register('state')} required />
              </FormAddressCityState>
            </form>
          </AddressContainer>

          <PaymentContainer>
            <h3>
              <CurrencyDollar size={22} /> Pagamento
            </h3>
            <span>
              O pagamento ?? feito na entrega. Escolha a forma que deseja pagar!
            </span>

            <PaymentsMethods>
              <ToggleGroup.Root
                type="single"
                onValueChange={(payment) => {
                  if (payment) setPaymentType(payment)
                }}
              >
                <ToggleGroup.Item value="Cart??o de Cr??dito">
                  <CreditCard size={16} /> Cart??o de Cr??dito
                </ToggleGroup.Item>
                <ToggleGroup.Item value="Cart??o de D??bito">
                  <CreditCard size={16} /> Cart??o de D??bito
                </ToggleGroup.Item>
                <ToggleGroup.Item value="Dinheiro">
                  <Money size={16} /> Dinheiro
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </PaymentsMethods>
          </PaymentContainer>
        </div>

        <div>
          <h2 className="titleCoffeesContainer">Caf??s selecionados</h2>

          <div>
            <CoffeeSelected />
          </div>
        </div>
      </CheckoutContainer>
    </div>
  )
}

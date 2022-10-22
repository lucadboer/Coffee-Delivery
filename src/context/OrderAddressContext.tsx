import { createContext, ReactNode } from 'react'

export interface OrderAddressType {
  road: string
  number: string
  district: string
  city: string
  state: string
  orderConfirmed: (data: object) => void
}

interface OrderAddressContextProviderProps {
  children: ReactNode
}

export const OrderAddressContext = createContext({} as OrderAddressType)

export function OrderAddressContextProvider({
  children,
}: OrderAddressContextProviderProps) {
  function orderConfirmed(data: object) {
    console.log(data)
  }

  return (
    <OrderAddressContext.Provider value={{ orderConfirmed }}>
      {children}
    </OrderAddressContext.Provider>
  )
}

import { coffees } from '../data/coffeesData'

import React, { createContext, ReactNode, useState } from 'react'

import { produce } from 'immer'

export interface CoffeeDataTypes {
  id: number
  imgUrl: string
  categories: string[]
  name: string
  subtitle: string
  price: number
  quantity: number
}

interface CoffesContextProps {
  coffesListObj: typeof coffees
  cartItems: CoffeeDataTypes[]
  setCartItems: React.Dispatch<React.SetStateAction<CoffeeDataTypes[]>>
  addCoffeeToCart: (coffee: CoffeeDataTypes) => void
  removeCoffeeFromCart: (cartId: number) => void
}

// interface CoffeeOnCart {
//   id: number
//   name: string
//   price: number
// }

interface CartContextTypes {
  quantityItemsOnCart: number
  changeQuantityCart: (coffeeId: number) => void
  addNewCoffeeOnCart: (coffeeId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const coffeesListObj = coffees

export const CartContext = createContext({} as CartContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CoffeeDataTypes[]>([])
  const [coffeesOnCart, setCoffeesOnCart] = useState([0])
  const [quantityItemsOnCart, setQuantityItemsOnCart] = useState(0)

  function addNewCoffeeOnCart(coffeeId: number) {
    const coffeeAlreadyExists = cartItems.findIndex(
      (cartItem) => cartItem.id === coffeeId,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExists < 0) {
        draft.push()
      }
    })
  }

  function changeQuantityCart(coffeeId: number) {
    setQuantityItemsOnCart((state) => {
      return state + 1
    })
  }

  return (
    <CartContext.Provider
      value={{ quantityItemsOnCart, changeQuantityCart, addNewCoffeeOnCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

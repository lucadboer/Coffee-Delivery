import React, { createContext, ReactNode, useState } from 'react'

import { produce } from 'immer'
import { Coffee } from '../pages/Home/components/Coffee'

export interface CartItem extends Coffee {
  quantity: number
}

// interface CoffeeOnCart {
//   id: number
//   name: string
//   price: number
// }

interface CartContextTypes {
  cartItems: CartItem[]
  addNewCoffeeToCart: (coffee: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addNewCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)

    console.log(cartItems)
  }

  return (
    <CartContext.Provider value={{ cartItems, addNewCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}

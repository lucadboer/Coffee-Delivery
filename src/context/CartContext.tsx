import { createContext, ReactNode, useEffect, useState } from 'react'

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
  cartQuantity: number
  cartPriceItemsTotal: number
  addNewCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    itemID: number,
    type: 'Increase' | 'Decrease',
  ) => void
  removeItemInCart: (itemID: number) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const cartQuantity = cartItems.length

  const cartPriceItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

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
  }

  function changeCartItemQuantity(
    itemID: number,
    type: 'Increase' | 'Decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === itemID,
      )

      if (coffeeExistInCart >= 0) {
        const item = draft[coffeeExistInCart]
        draft[coffeeExistInCart].quantity =
          type === 'Increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeItemInCart(itemID: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeToRemove = cartItems.findIndex(
        (cartItem) => cartItem.id === itemID,
      )
      if (coffeeToRemove >= 0) {
        draft.splice(coffeeToRemove, 1)
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addNewCoffeeToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeItemInCart,
        cartPriceItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

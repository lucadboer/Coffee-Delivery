import React, { useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { QuantityContainer } from './styles'

export function SetQuantityCoffee() {
  const [quantityCoffee, setQuantityCoffee] = useState(1)

  return (
    <div>
      <QuantityContainer>
        <button
          type="button"
          onClick={() => {
            setQuantityCoffee((state) => {
              if (quantityCoffee > 1) {
                return state - 1
              }
              return state
            })
          }}
        >
          <Minus size={14} />
        </button>
        <input type="number" value={quantityCoffee} name="quantity" />
        <button
          type="button"
          onClick={() => {
            setQuantityCoffee((state) => {
              return state + 1
            })
          }}
        >
          <Plus size={14} />
        </button>
      </QuantityContainer>
    </div>
  )
}

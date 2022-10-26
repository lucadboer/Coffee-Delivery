import { Minus, Plus } from 'phosphor-react'
import { QuantityContainer } from './styles'

interface QuantityProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function SetQuantityCoffee({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityProps) {
  return (
    <div>
      <QuantityContainer>
        <button type="button" onClick={onDecrease}>
          <Minus size={14} />
        </button>
        <input type="number" disabled value={quantity} name="quantity" />
        <button type="button" onClick={onIncrease}>
          <Plus size={14} />
        </button>
      </QuantityContainer>
    </div>
  )
}

import cup from '../../assets/Cup.svg'
import items from '../../assets/items.svg'
import { CoffeesContainer, Containers, IntroContainer } from './styles'
import { coffees } from '../../data/coffeesData'
import { CoffeeCard } from './components/Coffee'
import { useCart } from '../../hooks/useCart'

export function Home() {
  const { cartItems } = useCart()
  return (
    <div>
      <IntroContainer>
        <section>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora!
            </p>
            <img src={items} alt="" />
          </div>
        </section>
        <img src={cup} alt="" />
      </IntroContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <Containers>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </Containers>
      </CoffeesContainer>
    </div>
  )
}

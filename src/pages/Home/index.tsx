import cup from '../../assets/Cup.svg'
import items from '../../assets/items.svg'
import { Coffees } from './components/Coffees/Coffees'
import { CoffeesContainer, Containers, IntroContainer } from './styles'

export function Home() {
  return (
    <div>
      <IntroContainer>
        <section>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <img src={items} alt="" />
          </div>
        </section>
        <img src={cup} alt="" />
      </IntroContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <Containers>
          <Coffees />
          <Coffees />
          <Coffees />
          <Coffees />
          <Coffees />
          <Coffees />
          <Coffees />
          <Coffees />
          <Coffees />
          <Coffees />
          <Coffees />
        </Containers>
      </CoffeesContainer>
    </div>
  )
}

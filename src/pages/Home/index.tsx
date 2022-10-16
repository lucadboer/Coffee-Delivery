import cup from '../../assets/Cup.svg'
import items from '../../assets/items.svg'
import { CoffeesContainer, IntroContainer } from './styles'
import coffee1 from '../../assets/coffees/Image.svg'

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

        <div>
          <div>
            <img src={coffee1} />
            <h4>Tradicional</h4>
            <h3>Expresso Adicional</h3>
            <p>O tradicional café feito com água quente e grãos moidos</p>
            <div>
              <span>
                RS
                <span>9,90</span>
              </span>
            </div>
          </div>
        </div>
      </CoffeesContainer>
    </div>
  )
}

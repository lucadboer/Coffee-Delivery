import cup from '../../assets/Cup.svg'
import {
  BenefitsContainer,
  CoffeesContainer,
  Containers,
  IntroContainer,
  IntroText,
} from './styles'
import { coffees } from '../../data/coffeesData'
import { useTheme } from 'styled-components'
import { CoffeeCard } from './components/Coffee'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { InfoWithIcon } from '../../components/InfoWithIcons'

export function Home() {
  const colors = useTheme()

  return (
    <div>
      <IntroContainer>
        <section>
          <IntroText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora!
            </p>
          </IntroText>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors['yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconBg={colors.yellow}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconBg={colors.purple}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
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

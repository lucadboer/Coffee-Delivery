import styled from 'styled-components'

import background from '../../assets/Background-Coffee.svg'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`

export const IntroContainer = styled(Container)`
  background: url(${background});
  padding: 5.875rem 10rem 6.75rem 10rem;
`

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font-family: 'Baloo 2';
    line-height: 1.3;
    font-weight: bolder;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: ${(props) => props.theme.text};
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  row-gap: 1.25rem;
  column-gap: -10rem;
  margin-top: 4.125rem;
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 500;
`

export const CoffeesContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 900;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Containers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

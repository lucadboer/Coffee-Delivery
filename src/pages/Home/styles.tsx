import styled from 'styled-components'

import background from '../../assets/Background-Coffee.svg'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.5rem;
    }
  }
`

export const IntroContainer = styled(Container)`
  background: url(${background});
  padding: 5.875rem 10rem 6.75rem 10rem;

  @media (max-width: 768px) {
    padding: 2.875rem 1rem 3rem 1rem;

    img {
      width: 17rem;
      margin-top: 3rem;
      align-self: center;
    }
  }
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

  @media (max-width: 768px) {
    margin-top: -2rem;
    flex-direction: column;

    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;

  margin-top: 4.125rem;
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 768px) {
    margin-top: 2rem;
    grid-template-columns: 1fr;
    font-size: 1rem;
    row-gap: 1rem;
  }
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

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 1.7rem;
      align-self: flex-start;
    }
  }
`

export const Containers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

import styled from 'styled-components'

import background from '../../assets/Background-Coffee.svg'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`

export const IntroContainer = styled(Container)`
  background: url(${background});
  gap: 3.5rem;
  padding: 5.875rem 10rem 6.75rem 10rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-family: 'Baloo 2';
      line-height: 1.3;
      font-weight: bolder;
      font-size: 2.8rem;
      color: ${(props) => props.theme['base-title']};
    }

    p {
      font-family: ${(props) => props.theme.text};
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-text']};
      line-height: 1.3;
    }

    img {
      margin-top: 3.5rem;
    }
  }
  img {
    width: 27.5rem;
  }
`

export const CoffeesContainer = styled(Container)`
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

import styled from 'styled-components'

import background from '../../assets/Background-Coffee.svg'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`

export const IntroContainer = styled(Container)`
  background: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  gap: 3.5rem;
  padding: 5.875rem 10rem 6.75rem 10rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      line-height: 1.3;
      font-weight: bolder;
      font-size: 2rem;
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
  padding: 2rem 10rem;
`

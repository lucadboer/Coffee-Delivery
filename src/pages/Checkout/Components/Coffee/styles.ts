import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding: 2rem 0;

  img {
    width: 4rem;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    div {
      gap: 0.5rem;
    }
  }
`

export const CoffeeStatus = styled.div`
  display: flex;
`

export const DeleteCoffee = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.75px;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
  svg {
    display: flex;
    color: ${(props) => props.theme.purple};
  }
  padding: 0 0.5rem;
`

export const Price = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-text']};
  margin-left: 3.125rem;
`

import styled from 'styled-components'

export const CoffeeOnCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px;
  max-width: 28rem;
  padding: 2.5rem;
  padding-top: calc(2.5rem - 2rem);

  footer {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};

        span {
          font-size: 1rem;
        }
      }

      h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        font-weight: bold;
        color: ${(props) => props.theme['base-text']};

        span {
          font-family: 'Roboto', sans-serif;
          font-size: 1.25rem;
          font-weight: bold;
          color: ${(props) => props.theme['base-text']};
        }
      }
    }

    button {
      padding: 1rem;
      border: 0;
      border-radius: 8px;
      font-family: 'Roboto', sans-serif;
      font-size: 1.115rem;
      background-color: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`

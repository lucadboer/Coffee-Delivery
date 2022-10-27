import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 640px 1fr;
  gap: 2rem;
  padding: 0 10rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    width: 30rem;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0;

    .titleCoffeesContainer {
      padding: 0 2rem;
    }

    h2 {
      padding: 0 3rem;
    }
  }
`

export const AddressContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 8px;
  max-width: 40rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.75rem;
    border: none;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 8px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    width: 30rem;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    overflow: hidden;

    form {
      width: 75%;
      font-size: 1rem;
    }
  }
`

export const HeaderAddress = styled.div`
  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
  span {
    margin-left: 1.8rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`

export const CEPForm = styled.input`
  width: 12.5rem;
`

export const RuaForm = styled.input`
  width: 35rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const FormNumberComplement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  input:last-child {
    width: 21.75rem;
  }

  @media (max-width: 768px) {
    input {
      width: 5rem;
    }
    input:last-child {
      width: 17.8rem;
    }
  }
`

export const FormAddressCityState = styled.div`
  display: flex;
  gap: 0.75rem;

  input:nth-child(2) {
    width: 17.25rem;
  }

  input:last-child {
    width: 3.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    input:nth-child(1) {
      width: 22rem;
    }

    input:nth-child(2) {
      width: 22rem;
    }

    input:last-child {
      width: 3.75rem;
    }
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px;
  margin-bottom: 8rem;

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
  span {
    margin-left: 1.8rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: -3rem;
  }
`

export const PaymentsMethods = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background-color: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};
      border: none;
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme['base-hover']};
      }

      &[data-state='on'] {
        background-color: ${(props) => props.theme['purple-light']};
      }

      svg {
        color: ${(props) => props.theme.purple};
      }
    }
  }

  @media (max-width: 768px) {
    div {
      display: flex;
      flex-direction: column;
      width: 15rem;

      button {
        width: 100%;
        font-size: 1.05rem;
      }
    }
  }
`

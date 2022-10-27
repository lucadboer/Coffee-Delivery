import styled from 'styled-components'

export const SucessContainer = styled.div`
  padding: 5rem 10rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 2rem;
      font-weight: bolder;
      color: ${(props) => props.theme['yellow-dark']};
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  main {
    display: flex;
    gap: 6.375rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 4rem;

    header {
      h1 {
        font-size: 1.7rem;
      }

      span {
        font-size: 1rem;
      }
      margin-top: -3rem;
    }
    main {
      display: flex;
      flex-direction: column;

      img {
        width: 20rem;
        margin: 0 auto;
        margin-top: -3rem;
      }
    }
  }
`

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  svg {
    margin-right: 0.75rem;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    color: white;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`

export const OrderInformationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 33rem;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-radius: 5px 35px;
  background: ${(props) => props.theme.background};

  &::after {
    position: absolute;
    content: '';
    z-index: -1;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    border-radius: 6px 36px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
    justify-content: center;
    margin: auto;
    margin-top: 2rem;
    margin-left: 1rem;
  }
`

export const OrderAddressContainer = styled(OrderContainer)`
  svg {
    background-color: ${(props) => props.theme.purple};
  }

  span {
    font-weight: 700;
  }
`

export const OrderTimeDeliveryContainer = styled(OrderContainer)`
  svg {
    background-color: ${(props) => props.theme.yellow};
  }
`

export const OrderPaymentContainer = styled(OrderContainer)`
  svg {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

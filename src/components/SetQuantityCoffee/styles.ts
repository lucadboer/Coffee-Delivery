import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  width: 4.5rem;
  padding: 0.5rem 0.3rem;
  border: 0;
  border-radius: 8px;
  margin-left: 1.45rem;
  background-color: ${(props) => props.theme['base-button']};

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: 0;
    margin: auto;
    color: ${(props) => props.theme.purple};
    transition: all 0.15s;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
      transform: scale(1.1);
    }
  }

  input {
    flex: 1;
    font-family: 'Roboto';
    font-size: 1rem;
    line-height: 130%;
    background: transparent;
    border: 0;
    width: 0.8rem;
    text-align: center;
  }
`

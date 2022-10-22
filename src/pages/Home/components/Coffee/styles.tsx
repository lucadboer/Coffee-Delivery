import styled from 'styled-components'

export const CoffeeCard = styled.div`
  position: relative;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 12px 36px;
  margin-top: 3.375rem;

  img {
    position: absolute;
    top: -20px;
  }

  h3 {
    margin-top: 1rem;
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    display: flex;
    gap: 0.25rem;
    margin-top: calc(7rem - 1.25rem);

    li {
      list-style: none;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.8px;
      line-height: 1.3;
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
    }
  }

  p {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    margin-top: 0.5rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const FooterCard = styled.div`
  width: 100%;
  margin-top: 1.75rem;
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: nowrap;
  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    span {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 900;
      padding-left: 0.25rem;
    }
  }

  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;

    div {
    }
    button[type='submit'] {
      display: flex;
      align-items: center;
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      border: none;
      padding: 0.5rem;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.25s;

      &:hover {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }
`

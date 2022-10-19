import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10rem;
  margin: 2rem 0;
  font-family: ${(props) => props.theme.text};

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem;
      border-radius: 8px;
      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      font-size: 0.875rem;

      svg {
        color: ${(props) => props.theme.purple};
      }
    }
    a {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 8px;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

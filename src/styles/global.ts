import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.2s;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
}

body {
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']};
}

body, input, textarea, button {
  font-weight: 400;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
`

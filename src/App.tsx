import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './context/CartContext'
import { OrderAddressContextProvider } from './context/OrderAddressContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <OrderAddressContextProvider>
            <Router />
          </OrderAddressContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompleteOrderPage } from './pages/Checkout'
import { Home } from './pages/Home'
import { OrderSucess } from './pages/Sucess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CompleteOrderPage />} />
        <Route path="/sucess" element={<OrderSucess />} />
      </Route>
    </Routes>
  )
}

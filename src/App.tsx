import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'

import ListaContato from './containers/ListaContatos'
import FormCadastro from './containers/FormCadastro'

export type Contato = {
  nome: string
  email: string
  telefone: string
  id: number
}

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ListaContato />
  },
  {
    path: '/cadastro',
    element: <FormCadastro />
  }
])

function App() {
  return (
    <Container>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </Container>
  )
}

export default App

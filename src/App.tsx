import EstiloGlobal, { Container } from './styles'

import ListaContato from './containers/ListaContatos'

function App() {
  return (
    <Container>
      <EstiloGlobal />
      <ListaContato />
    </Container>
  )
}

export default App

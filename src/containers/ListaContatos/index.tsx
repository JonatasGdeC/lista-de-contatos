import BotaoAdicionar from '../../components/BotaoAdicionar'
import Contato from '../../components/Contato'

import { Header } from '../../styles'
import { Lista } from './styles'

const ListaContato = () => {
  return (
    <>
      <Header>
        <h1>Contatos</h1>
        <BotaoAdicionar />
      </Header>
      <Lista>
        <li>
          <Contato />
        </li>
      </Lista>
    </>
  )
}

export default ListaContato

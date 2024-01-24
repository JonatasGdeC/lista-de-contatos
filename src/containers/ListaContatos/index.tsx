import BotaoAdicionar from '../../components/BotaoAdicionar'
import ContatoCard from '../../components/Contato'

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
          <ContatoCard nome={''} email={''} telefone={''} id={0} />
        </li>
      </Lista>
    </>
  )
}

export default ListaContato

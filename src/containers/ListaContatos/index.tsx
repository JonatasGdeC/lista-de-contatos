import { useSelector } from 'react-redux'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import ContatoCard from '../../components/Contato'

import { Header } from '../../styles'
import { Lista } from './styles'
import { RootReducer } from '../../store'

const ListaContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)

  return (
    <>
      <Header>
        <h1>Contatos</h1>
        <BotaoAdicionar />
      </Header>
      <Lista>
        {itens.map((c) => (
          <li key={c.id}>
            <ContatoCard
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
              id={c.id}
            />
          </li>
        ))}
      </Lista>
    </>
  )
}

export default ListaContato

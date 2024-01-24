import { BotaoEditarSalvarCadastrar, BotaoExcluirCancelar } from '../../styles'
import { Card } from './styles'

const Contato = () => {
  return (
    <Card>
      <div>
        <p>Nome:</p>
        <p>E-mail:</p>
        <p>Telefone:</p>
      </div>
      <div>
        <BotaoEditarSalvarCadastrar>Editar</BotaoEditarSalvarCadastrar>
        <BotaoExcluirCancelar>Remover</BotaoExcluirCancelar>
      </div>
    </Card>
  )
}

export default Contato

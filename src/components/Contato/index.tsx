import { useDispatch } from 'react-redux'
import { Contato } from '../../App'
import { BotaoEditarSalvarCadastrar, BotaoExcluirCancelar } from '../../styles'
import * as S from './styles'
import { remover } from '../../store/reducers/contato'

type Props = Contato

const ContatoCard = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Card>
      <div>
        <S.Dados>
          <label htmlFor="">Nome:</label>
          <input type="text" value={nome} />
        </S.Dados>
        <S.Dados>
          <label htmlFor="">E-mail:</label>
          <input type="email" value={email} />
        </S.Dados>
        <S.Dados>
          <label htmlFor="">Telefone:</label>
          <input type="tel" value={telefone} />
        </S.Dados>
      </div>
      <S.Buttons>
        <BotaoEditarSalvarCadastrar>Editar</BotaoEditarSalvarCadastrar>
        <BotaoExcluirCancelar onClick={() => dispatch(remover(id))}>
          Remover
        </BotaoExcluirCancelar>
      </S.Buttons>
    </S.Card>
  )
}

export default ContatoCard

import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { Contato } from '../../App'
import { BotaoEditarSalvarCadastrar, BotaoExcluirCancelar } from '../../styles'
import * as S from './styles'
import { editar, remover } from '../../store/reducers/contato'

type Props = Contato

const ContatoCard = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (
      nomeOriginal.length > 0 ||
      emailOriginal.length > 0 ||
      telefoneOriginal.length > 0
    ) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, nomeOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <div>
        <S.Dados>
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            value={nome}
            disabled={!editando}
            onChange={(e) => setNome(e.target.value)}
          />
        </S.Dados>
        <S.Dados>
          <label htmlFor="">E-mail:</label>
          <input
            type="email"
            value={email}
            disabled={!editando}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.Dados>
        <S.Dados>
          <label htmlFor="">Telefone:</label>
          <input
            type="tel"
            value={telefone}
            disabled={!editando}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </S.Dados>
      </div>
      <S.Buttons>
        {editando ? (
          <>
            <BotaoEditarSalvarCadastrar
              onClick={() => {
                dispatch(editar({ nome, email, telefone, id }))
                setEditando(false)
              }}
            >
              Salvar
            </BotaoEditarSalvarCadastrar>
            <BotaoExcluirCancelar onClick={cancelarEdicao}>
              Cancelar
            </BotaoExcluirCancelar>
          </>
        ) : (
          <>
            <BotaoEditarSalvarCadastrar onClick={() => setEditando(true)}>
              Editar
            </BotaoEditarSalvarCadastrar>
            <BotaoExcluirCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoExcluirCancelar>
          </>
        )}
      </S.Buttons>
    </S.Card>
  )
}

export default ContatoCard

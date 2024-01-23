import * as S from './styles'

const Contato = () => {
  return (
    <S.Card>
      <div>
        <p>Nome:</p>
        <p>E-mail:</p>
        <p>Telefone:</p>
      </div>
      <S.Buttons>
        <button>Editar</button>
        <button>Remover</button>
      </S.Buttons>
    </S.Card>
  )
}

export default Contato

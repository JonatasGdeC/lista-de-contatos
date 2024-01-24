import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { cadastrar } from '../../store/reducers/contato'

import { BotaoEditarSalvarCadastrar, ButtonRotas, Header } from '../../styles'
import { Form } from './styles'

const FormCadastro = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
  }

  return (
    <>
      <Header>
        <h1>Cadastro</h1>
        <ButtonRotas to="/">Voltar</ButtonRotas>
      </Header>
      <Form onSubmit={cadastrarContato}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <BotaoEditarSalvarCadastrar type="submit">
          Cadastar
        </BotaoEditarSalvarCadastrar>
      </Form>
    </>
  )
}

export default FormCadastro

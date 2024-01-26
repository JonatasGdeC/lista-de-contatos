import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'

import { cadastrar } from '../../store/reducers/contato'

import { BotaoEditarSalvarCadastrar, ButtonRotas, Header } from '../../styles'
import { Form } from './styles'

const FormCadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    if ((nome && email && telefone) === '') {
      alert('Preencha todos os campos corretamente!')
    } else if (nome.length < 3) {
      alert('Digite um nome acima de 3 caracteres!')
    } else if (telefone.length < 8) {
      alert('Digite um número de telefone!')
    } else {
      dispatch(
        cadastrar({
          nome,
          email,
          telefone
        })
      )
      navigate('/')
    }
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
          <IMaskInput
            mask="(00) 00000-0000"
            type="text"
            id="telefone"
            value={telefone}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTelefone(e.target.value)
            }
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

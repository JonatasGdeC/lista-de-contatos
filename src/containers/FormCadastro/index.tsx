import { BotaoEditarSalvarCadastrar, ButtonRotas, Header } from '../../styles'
import { Form } from './styles'

const FormCadastro = () => {
  return (
    <>
      <Header>
        <h1>Cadastro</h1>
        <ButtonRotas to="/">Voltar</ButtonRotas>
      </Header>
      <Form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" />
        </div>
        <BotaoEditarSalvarCadastrar>Cadastar</BotaoEditarSalvarCadastrar>
      </Form>
    </>
  )
}

export default FormCadastro

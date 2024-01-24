import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 32px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: ${variaveis.branco};
  padding: 16px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
    padding: 6px;
  }
`
export const Botao = styled.button`
  padding: 8px;
  font-size: 8px;
  font-weight: bold;
  color: ${variaveis.branco};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.7;
  }
`
export const BotaoEditarSalvarCadastrar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoExcluirCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const ButtonRotas = styled(Link)`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${variaveis.azul};
  color: ${variaveis.branco};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

export default EstiloGlobal

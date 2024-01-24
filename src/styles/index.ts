import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

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
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: #fff;
  padding: 16px;
`
export const Botao = styled.button`
  padding: 8px;
  font-size: 8px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.7;
  }
`
export const BotaoEditarSalvarCadastrar = styled(Botao)`
  background-color: green;
`

export const BotaoExcluirCancelar = styled(Botao)`
  background-color: red;
`

export const ButtonRotas = styled(Link)`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

export default EstiloGlobal

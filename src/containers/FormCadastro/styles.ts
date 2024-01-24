import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    label {
      font-weight: bold;
      cursor: pointer;
      margin-bottom: 6px;
    }

    input {
      padding: 8px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      background-color: ${variaveis.azul2};

      &:focus {
        outline: none;
      }

      &[type='number']::-webkit-inner-spin-button,
      input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`

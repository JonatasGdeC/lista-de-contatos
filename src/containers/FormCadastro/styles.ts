import styled from 'styled-components'

export const Form = styled.form`
  border: 1px solid #000;
  padding: 12px;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    label {
      font-weight: bold;
      cursor: pointer;
    }

    input {
      padding: 8px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      background-color: #e3e3ff;

      &:focus {
        outline: none;
      }
    }
  }
`

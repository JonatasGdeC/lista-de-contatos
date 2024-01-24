import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    scale: 1.03;
  }

  div:first-of-type {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: 16px;
  }
`

export const Dados = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  label {
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;
  }

  input {
    border: none;
    padding: 6px;
    font-size: 16px;
    font-style: italic;
    width: 50%;

    &:focus {
      outline: none;
      border: 1px solid #000;
    }

    @media (max-width: 768px) {
      width: auto;
    }
  }
`

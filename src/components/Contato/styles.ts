import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #000;
  border-radius: 16px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
export const Buttons = styled.div`
  button {
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

    &:first-child {
      background-color: green;
    }

    &:nth-child(2) {
      background-color: red;
    }
  }
`

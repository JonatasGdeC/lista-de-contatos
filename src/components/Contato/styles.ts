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

import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  z-index: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`

const Img = styled.img`
  position: fixed;
  left: 40px;
  width: 80px;
  object-fit: contain;
`

export const S = {
  Container,
  Img,
}

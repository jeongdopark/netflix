import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  object-fit: contain;
  height: 448px;
`

const Description = styled.div`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  max-width: 400px;
  height: 80px;
`

const Title = styled.div`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.5rem;
`

const Content = styled.div`
  margin-left: 40px;
  padding-top: 140px;
  height: 190px;
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.4rem 1.8rem 0.4rem 1rem;
  margin-right: 1rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const S = {
  Container,
  ButtonWrapper,
  Button,
  Description,
  Title,
  Content,
}

import styled from 'styled-components'

const Container = styled.div`
  margin-left: 20px;
  color: white;
`

const SliderContainer = styled.div`
  position: relative;
`

const Title = styled.h2`
  padding-left: 20px;
`

const PosterContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 0 20px 20px;
  scroll-behavior: smooth;
`

const Poster = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 144px;
  margin-right: 10px;
  transition: transform 450ms;
  border-radius: 4px;

  &:hover {
    transform: scale(1.08);
  }
`

export const S = {
  Container,
  Title,
  PosterContainer,
  Poster,
  SliderContainer,
}

import { S } from './nav.styled'
import logo from '../../../assets/netfliximg.png'

const Nav = () => {
  return (
    <S.Container>
      <S.Img src={logo} />
    </S.Container>
  )
}

export default Nav

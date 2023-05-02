import { useEffect, useState } from 'react'
import instance from '../../api/client/axios'
import { S } from './movieRow.styled'
import { IMG_URL } from '../../contstants'
import { MovieRowProp, MovieInfo } from '../../type/interface'

const MovieRow = ({ title, id, fetchUrl, isLarge }: MovieRowProp) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchMovieData()
  }, [])

  const fetchMovieData = async () => {
    const { data: response } = await instance.get(fetchUrl)
    setMovies(response.results)
  }
  console.log(movies)
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.PosterContainer>
        {movies.map((movie: MovieInfo) => (
          <S.Poster key={movie.id} src={`${IMG_URL}${movie.backdrop_path}`} />
        ))}
      </S.PosterContainer>
    </S.Container>
  )
}

export default MovieRow

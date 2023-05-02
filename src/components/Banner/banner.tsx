import { useEffect, useState } from 'react'
import { S } from './banner.styled'
import instance from '../../api/client/axios'
import requests from '../../api/url/request'
import { truncate } from '../../utils/truncate'
import { IMG_URL } from '../../contstants'
import './banner.css'
import { MovieInfo } from '../../type/interface'

const Banner = () => {
  const [movie, setmovie] = useState<MovieInfo>()

  useEffect(() => {
    fetchData()
  }, [])

  // 영화 정보 가져요기
  const fetchData = async () => {
    const { data: moviesArray } = await instance.get(requests.fetchNowPlaying)
    const movieId = moviesArray.results[Math.floor(Math.random() * moviesArray.results.length)].id

    const { data: movieDetail } = await instance.get(`/movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    })
    setmovie(movieDetail)
  }


  return (
    movie !== undefined ? 
    <header className="banner" style={{backgroundImage: `url(${IMG_URL}/${movie?.backdrop_path})`}}>
      <S.Content>
        <S.Title>{movie?.title || movie?.name || movie?.original_title}</S.Title>
        <S.ButtonWrapper>
          <S.Button>Play</S.Button>
          <S.Button>More Information</S.Button>
        </S.ButtonWrapper>
        <S.Description>{truncate(movie?.overview, 100)}</S.Description>
      </S.Content>
    </header> 
    :
    null
  )
}

export default Banner

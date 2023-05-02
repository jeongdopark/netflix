export interface MovieInfo {
  backdrop_path: string;
  original_title: string;
  overview: string;
  title: string;
  name: string;
  id: number;
}

export interface MovieRowProp {
  isLarge: boolean;
  title: string;
  id: string;
  fetchUrl: string;
}

export interface ImgProps {
  src: string;
  alt: string;
}

export interface AutorProps {
  avatar: string;
  name: string;
}

export interface PostProps {
  id: string;
  title: string;
  tag: string;
  date: string;
  img: ImgProps;
  author: AutorProps;
}

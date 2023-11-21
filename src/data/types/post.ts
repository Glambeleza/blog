export interface AuthorProps {
  name: string;
  avatar: string;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface AffiliateLinkProps {
  href: string;
  to: string;
  platform: string;
}

export interface ParagraphProps {
  text: string;
  img?: ImageProps;
  linkHref?: AffiliateLinkProps[];
}

export interface BlogProps {
  tag: string;
  title: string;
  date: string;
  author: AuthorProps;
  image: ImageProps;
  summary: string;
  paragraphs: ParagraphProps[];
}

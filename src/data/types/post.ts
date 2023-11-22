export interface ImageProps {
  src: string;
  alt: string;
}

export interface AuthorProps {
  name: string;
  avatar: string;
}

export interface AffiliateLinkProps {
  href: string;
  to: string;
  platform: string;
}

export interface ParagraphProps {
  text: string;
  image?: ImageProps;
  linkHref?: AffiliateLinkProps[];
}

export interface PostProps {
  id: string;
  slug: string;
  tag: string;
  title: string;
  date: string;
  author: AuthorProps;
  image: ImageProps;
  summary: string;
  paragraphs: ParagraphProps[];
}

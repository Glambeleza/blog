export interface ImageProps {
  src: string;
  alt: string;
}

export interface AuthorProps {
  id: string;
  name: string;
  avatar: string;
  active: boolean;
  role: string;
}

export interface AffiliateLinkProps {
  id: string;
  paragraph_id: string;
  title: string;
  href: string;
  platform: string;
  image: string;
}

export interface ParagraphProps {
  text: string;
  image?: string;
  affiliates?: AffiliateLinkProps[];
}

export interface PostProps {
  id: string;
  user_id: string;
  slug: string;
  tag: string;
  created_at: Date;
  published: boolean;
  title: string;
  image: string;
  summary: string;
  author: AuthorProps;
  paragraphs: ParagraphProps[];
}

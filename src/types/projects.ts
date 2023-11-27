export interface ProjectsType {
  imgs: {
    large: ImageMetadata;
    small: ImageMetadata;
  };
  alt: string;
  name: string;
  live: string;
  code?: string;
  stack: string[];
}

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

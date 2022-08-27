declare module "*.mp4" {
  const value: any;
  export = value;
}

export interface Person {
  name: string;
  image: string;
  role: string;
  aka: string;
  socials: any[];
}

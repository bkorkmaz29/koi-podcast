export interface User {
  name: string;
  email: string;
  password: string;
}

export interface IPodcast {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  link: string;
  episodeCount: number;
  categories: { 
    category: string;
  }
}

export interface Episode {
  id: number;
  title: string;
  listen: string;
  date: string;
}

export type UserContextType = {
  user: User | null;
  subs: Array<number>;
  saveSub: (sub: number) => void;
  deleteSub: (sub: number) => void;
  updateSubs: (sub: Array<number>) => void;
};

export interface User {
  name: string;
  email: string;
  password: string;
  subs: Array<number>;
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

export type SubsContextType = {
  subs: Array<number>;
  saveSub: (sub: number) => void;
  deleteSub: (sub: number) => void;
  updateSubs: (sub: Array<number>) => void;
};

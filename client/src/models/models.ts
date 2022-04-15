export interface User {
    name: string;
    email: string;
    password: string;
  }

  export interface Podcast {
      id: number;
      title: string;
      ownerName: string;
      description: string;
      image: string;
      link: string;
  }

  export interface Episode {
    id: number;
    title: string;
    listen: string;
    date: string;
    
   
}
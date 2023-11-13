export interface Post {
  postId: string;
  user: string;
  title: string;
  description: string;
  createdAt: Date;
  coords: {
    lat: number;
    lng: number;
  };
  images: string[];
  location: string;
  price: number;
}

export interface Post {
  postId: string;
  uid: string;
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

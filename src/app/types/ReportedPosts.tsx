export interface ReportedPost {
  postDetails: {
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
  };
  reason: string;
  reportedBy: string;
}

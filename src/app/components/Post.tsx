import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface Props {
  title?: string;
  description?: string;
  images?: string[];
  upVotes?: number;
  downVotes?: number;
  location?: string;
  price?: number;
}

const Post: React.FC<Props> = () => {
  const { user } = UserAuth();
  const [userPosts, setUserPosts] = useState<Props[]>([]);
  const [currentImages, setCurrentImages] = useState(
    Array(userPosts.length).fill(0)
  );

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (user) {
        const q = query(collection(db, "posts"), where("user", "==", user.uid));

        try {
          const querySnapshot = await getDocs(q);

          if (querySnapshot.empty) {
            console.log("No posts found for the user");
          } else {
            const postsData: Props[] = [];
            querySnapshot.forEach((doc) => {
              const postData = doc.data() as Props;
              postsData.push(postData);
            });
            setUserPosts(postsData);
            setCurrentImages(Array(postsData.length).fill(0));
          }
        } catch (error) {
          console.log("Error fetching user posts:", error);
        }
      } else {
        console.log("Waiting for user");
      }
    };

    fetchUserPosts();
  }, [user]);

  useEffect(() => {}, [userPosts]);

  const nextImage = (index: number) => {
    setCurrentImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] =
        (newImages[index] + 1) % (userPosts[index]?.images?.length || 1);
      return newImages;
    });
  };

  const prevImage = (index: number) => {
    setCurrentImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] =
        (newImages[index] - 1 + (userPosts[index]?.images?.length || 1)) %
        (userPosts[index]?.images?.length || 1);
      return newImages;
    });
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-black mx-auto max-w-screen-lg px-8 pt-5 pb-5">
      {userPosts.map((post, index) => (
        <div
          key={index}
          className="bg-gray-500 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 border border-solid border-gray-500"
        >
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p>Description: </p>
          <div className="bg-gray-400 rounded-sm p-2 mb-4" style={{ height: '100px', overflowY: 'auto' }}>
  <p>{post.description}</p>
</div>
          {post.images && post.images.length > 0 && (
            <div className="relative">
              <img
                className="w-full h-60 object-cover rounded-md"
                src={post.images[currentImages[index]]}
                alt={`Image ${currentImages[index]}`}
              />
              <button
                onClick={() => prevImage(index)}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full"
              >
                &lt;
              </button>
              <button
                onClick={() => nextImage(index)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Post;

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {userPosts.map((post, index) => (
        <div
          key={index}
          className="bg-white rounded-md shadow-xl p-6 transition-transform transform hover:scale-105 border border-solid border-gray-200 backdrop-filter backdrop-blur-md"
          >
          <h1 className="text-2xl font-bold mb-2 text-gray-800">
            {post.title}
          </h1>
          <p>Description: </p>
          <div className="bg-gray-200 rounded-md p-2 mb-4">
            <p className="text-gray-800">{post.description}</p>
          </div>
          {post.images && post.images.length > 0 && (
            <div className="relative">
              <img
                className="w-full h-80 object-cover rounded-md"
                src={post.images[currentImages[index]]}
                alt={`Image ${currentImages[index]}`}
              />
              <button
                onClick={() => prevImage(index)}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                &lt;
              </button>
              <button
                onClick={() => nextImage(index)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                &gt;
              </button>
            </div>
          )}
          <p className="mt-4 text-gray-600">{post.location}</p>
          <p className="text-green-500 font-semibold">${post.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;

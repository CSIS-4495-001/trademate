import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  addDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { ReportedPost } from "@/app/types/ReportedPosts";

const ReportedPosts: React.FC<any> = () => {
  const { user, isAdmin } = UserAuth();
  const [reportedPosts, setReportedPosts] = useState<ReportedPost[]>([]);
  const [currentImages, setCurrentImages] = useState(
    Array(reportedPosts.length).fill(0)
  );

  useEffect(() => {
    const fetchReportedPosts = async () => {
      if (user) {
        const q = query(collection(db, "reportedPosts"));

        try {
          const querySnapshot = await getDocs(q);

          if (querySnapshot.empty) {
            console.log("No posts found for the user");
          } else {
            console.log("Total posts", querySnapshot.docs.length);
            const postsData: ReportedPost[] = [];
            querySnapshot.forEach((doc) => {
              const postData = doc.data() as ReportedPost;
              postsData.push(postData);
            });

            console.log({ postsData });

            setReportedPosts(postsData);
            setCurrentImages(Array(postsData.length).fill(0));
          }
        } catch (error) {
          console.log("Error fetching user posts:", error);
        }
      } else {
        console.log("Waiting for user");
      }
    };

    fetchReportedPosts();
  }, [user]);

  const nextImage = (index: number) => {
    setCurrentImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] =
        (newImages[index] + 1) %
        (reportedPosts[index]?.postDetails.images?.length || 1);
      return newImages;
    });
  };

  const prevImage = (index: number) => {
    setCurrentImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] =
        (newImages[index] -
          1 +
          (reportedPosts[index]?.postDetails.images?.length || 1)) %
        (reportedPosts[index]?.postDetails.images?.length || 1);
      return newImages;
    });
  };

  const handleDelete = async (postId: string) => {
    console.log("Deleting post with ID:", postId);

    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        // Query for the post
        const postsQuery = query(
          collection(db, "posts"),
          where("postId", "==", postId)
        );

        const reportedPostsQuery = query(
          collection(db, "reportedPosts"),
          where("postDetails.postId", "==", postId)
        );

        const querySnapshot = await getDocs(postsQuery);
        const reportedPostQuerySnapshot = await getDocs(reportedPostsQuery);

        if (!reportedPostQuerySnapshot.empty) {
          await deleteDoc(reportedPostQuerySnapshot.docs[0].ref);
        }

        if (!querySnapshot.empty) {
          // Get the first document from the query (there should only be one)
          const postDoc = querySnapshot.docs[0];

          // Get the post data
          const postData = postDoc.data();

          // Add the post to the deletedPosts collection
          const deletedPostsRef = doc(db, "deletedPosts", postId);
          await setDoc(deletedPostsRef, postData);

          // Delete the post from the original collection
          await deleteDoc(postDoc.ref);
        } else {
          console.error("Document does not exist");
        }

        // Remove the deleted post from the state
        setReportedPosts((prevPosts) => {
          const newPosts = prevPosts.filter(
            (post) => post.postDetails.postId !== postId
          );
          return newPosts;
        });
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  const handleIgnore = async (postId: string) => {
    console.log("Deleting post with ID:", postId);

    if (window.confirm("Are you sure you want to ignore this post?")) {
      try {
        const reportedPostsQuery = query(
          collection(db, "reportedPosts"),
          where("postDetails.postId", "==", postId)
        );

        const reportedPostQuerySnapshot = await getDocs(reportedPostsQuery);

        if (!reportedPostQuerySnapshot.empty) {
          await deleteDoc(reportedPostQuerySnapshot.docs[0].ref);
        }

        // Remove the deleted post from the state
        setReportedPosts((prevPosts) => {
          const newPosts = prevPosts.filter(
            (post) => post.postDetails.postId !== postId
          );
          return newPosts;
        });
      } catch (e) {
        console.error("Error deleting document: ", e);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black mx-auto max-w-screen-lg px-8 pt-5 pb-3">
      {reportedPosts.length === 0 ? (
        <p className="text-center text-gray-500">No reported posts available</p>
      ) : (
        reportedPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden relative"
          >
            {/* Image */}
            {post.postDetails.images && post.postDetails.images.length > 0 && (
              <div className="relative">
                <img
                  className="w-full h-60 object-cover rounded-t-md"
                  src={post.postDetails.images[currentImages[index]]}
                  alt={`Image ${currentImages[index]}`}
                />
                {post.postDetails.images.length > 1 && (
                  <div className="absolute top-0 right-0 flex items-center space-x-2">
                    <button
                      onClick={() => prevImage(index)}
                      className="bg-gray-200 text-gray-700 p-2"
                    >
                      &lt;
                    </button>
                    <button
                      onClick={() => nextImage(index)}
                      className="bg-gray-200 text-gray-700 p-2"
                    >
                      &gt;
                    </button>
                  </div>
                )}
              </div>
            )}
            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <h1 className="text-xl font-semibold mb-2 text-gray-900">
                {post.postDetails.title}
              </h1>

              {/* Description */}
              <p className="text-gray-700 mb-4">
                {post.postDetails.description}
              </p>

              {/* Location */}
              <div className="flex items-center text-gray-600">
                <svg
                  height="15pt"
                  viewBox="0 0 24 24"
                  width="15pt"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z" />
                </svg>
                <p className="ml-2 text-sm">{post.postDetails.location}</p>
              </div>

              {/* Price */}
              <p className="text-green-900 font-semibold text-lg mt-4">
                ${post.postDetails.price}
              </p>

              <div className="pl-2">
                <h2 className="text-gray-900 font-semibold">Reasons</h2>
                <div className="bg-gray-200 rounded-md p-3">
                  {Array.isArray(post.reason) && post.reason.length > 0 ? (
                    <ol className="pl-5 text-gray-700 list-decimal">
                      {post.reason.map((reason, index) => (
                        <li key={index}>{reason}</li>
                      ))}
                    </ol>
                  ) : (
                    <p>No reasons available</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-y-2 mt-2">
                <button
                  onClick={() =>
                    post.postDetails.postId &&
                    handleDelete(post.postDetails.postId)
                  }
                  type="button"
                  className="text-white-400 bg-red-600 hover:bg-gray-200 hover:text-gray-900 rounded-sm text-sm p-2 inline-flex items-center justify-center w-full"
                >
                  <span title="Delete this post">Delete</span>
                </button>
                <button
                  onClick={() => handleIgnore(post.postDetails.postId)}
                  type="button"
                  className="text-white-400 bg-green-600 hover:bg-gray-200 hover:text-gray-900 rounded-sm text-sm p-2 inline-flex items-center justify-center w-full"
                >
                  <span title="Ignore this post">Ignore</span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ReportedPosts;

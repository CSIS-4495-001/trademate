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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-black mx-auto px-8 pt-5 pb-3">
      {reportedPosts.length === 0 ? (
        <p className="text-center text-gray-500">No reported posts available</p>
      ) : (
        reportedPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-500 shadow-md p-6 transition-transform transform hover:scale-105 border border-solid border-gray-500 ring-2 ring-gray-500 ring-opacity-50 rounded-md"
          >
            <button
              onClick={() =>
                post.postDetails.postId && handleDelete(post.postDetails.postId)
              }
              type="button"
              className="text-gray-400 bg-gray-600 hover:bg-gray-200 float-right hover:text-gray-900 rounded-sm text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <span title="delete this post">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
            <button
              onClick={() => handleIgnore(post.postDetails.postId)} // Replace 'handleIgnore' with your ignore function
              type="button"
              className="text-gray-400 bg-gray-600 hover:bg-gray-200 float-right hover:text-gray-900 rounded-sm text-sm p-1.5 ml-2 inline-flex items-center"
            >
              <span title="Ignore this post">
                <svg
                  className="w-5 h-5"
                  fill="green"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 10.293a1 1 0 011.414 0l4.5 4.5a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414l-7.793 7.793-3.793-3.793a1 1 0 00-1.414 1.414l4 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <h1
              className="text-2xl font-normal mb-2 pl-2 bg-gray-600 rounded-sm text-gray-300"
              style={{ height: "32px", overflowY: "auto" }}
            >
              {post.postDetails.title}
            </h1>
            <p className="pl-2 text-gray-900">Description</p>
            <div
              className="bg-gray-600 rounded-sm p-2 mb-4 mix-blend-blemish"
              style={{ height: "100px", overflowY: "auto" }}
            >
              <p className="text-gray-400">{post.postDetails.description}</p>
            </div>
            {post.postDetails.images && post.postDetails.images.length > 0 && (
              <div className="relative">
                <img
                  className="w-full h-60 object-cover rounded-sm"
                  src={post.postDetails.images[currentImages[index]]}
                  alt={`Image ${currentImages[index]}`}
                />
                {post.postDetails.images.length > 1 && (
                  <div>
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
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              className="bg-gray-600 rounded-sm text-gray-400 p-1 mt-4"
            >
              <svg
                height="15pt"
                viewBox="0 0 512 512"
                width="15pt"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <path d="M256 0C156.125 0 76 80.125 76 180c0 39.625 13.875 67.5 38 112.25l141.875 219.75c2.125 3.25 6.125 5.5 10.125 5.5s8-2.25 10.125-5.5L398 292.25C422.125 247.5 436 219.625 436 180 436 80.125 355.875 0 256 0zm0 282.25c-31.875 0-57.5-25.625-57.5-57.5s25.625-57.5 57.5-57.5 57.5 25.625 57.5 57.5-25.625 57.5-57.5 57.5z" />
              </svg>
              <p
                style={{ marginLeft: "5px", height: "50px", overflowY: "auto" }}
              >
                {post.postDetails.location}
              </p>
            </div>
            <p
              className="text-green-900 font-semibold pt-4 pl-1"
              style={{
                fontSize: "1.2rem",
              }}
            >
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
          </div>
        ))
      )}
    </div>
  );
};

export default ReportedPosts;

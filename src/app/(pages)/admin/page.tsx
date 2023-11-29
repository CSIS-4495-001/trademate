"use client";

import react, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../../context/AuthContext.js";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase.js";
import InfoBanner from "@/app/components/InfoBanner";

const Admin = () => {
  const { user } = UserAuth();
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalDeletedPosts, setTotalDeletedPosts] = useState(0);
  const [totalReportedPosts, setTotalReportedPosts] = useState(0);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      if (user) {
        try {
          const usersRef = collection(db, "users"); // Change "users" to your collection name
          const usersSnapshot = await getDocs(usersRef);
          setTotalUsers(usersSnapshot.size);
        } catch (error) {
          console.error("Error fetching total users: ", error);
        }
      }
    };

    const fetchTotalPosts = async () => {
      if (user) {
        try {
          const postsRef = collection(db, "posts"); // Change "posts" to your collection name
          const postsSnapshot = await getDocs(postsRef);
          setTotalPosts(postsSnapshot.size);
        } catch (error) {
          console.error("Error fetching total posts: ", error);
        }
      }
    };

    const fetchTotalDeletedPosts = async () => {
      if (user) {
        try {
          const deletedPostsRef = collection(db, "deletedPosts"); // Change "deletedPosts" to your collection name
          const deletedPostsSnapshot = await getDocs(deletedPostsRef);
          setTotalDeletedPosts(deletedPostsSnapshot.size);
        } catch (error) {
          console.error("Error fetching total deleted posts: ", error);
        }
      }
    };

    const fetchTotalReportedPosts = async () => {
      if (user) {
        try {
          const reportedPostsRef = collection(db, "reportedPosts"); // Change "reportedPosts" to your collection name
          const reportedPostsSnapshot = await getDocs(reportedPostsRef);
          setTotalReportedPosts(reportedPostsSnapshot.size);
        } catch (error) {
          console.error("Error fetching total reported posts: ", error);
        }
      }
    };

    fetchTotalUsers();
    fetchTotalPosts();
    fetchTotalDeletedPosts();
    fetchTotalReportedPosts();
  }, [user]);

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="w-full">
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p>{totalUsers}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Total Posts</h3>
              <p>{totalPosts}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Total Deleted Posts</h3>
              <p>{totalDeletedPosts}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Total Reported Posts</h3>
              <p>{totalReportedPosts}</p>
            </div>

            <InfoBanner></InfoBanner>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

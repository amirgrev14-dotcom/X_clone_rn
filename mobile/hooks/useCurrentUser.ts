import { useQuery } from "@tanstack/react-query";
import { useApiClient, userApi } from "../utils/api";
import { Post } from "@/types";
import { usePosts } from "./usePosts";

export const useCurrentUser = () => {
  const api = useApiClient();
  const { posts } = usePosts() // Get all posts to filter user-specific posts later

  const {
    data: currentUser,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: () => userApi.getCurrentUser(api),
    select: (response) => response.data.user,
  });

  function getAllUserPosts() {
    if(!currentUser) return [];

    return posts.map((p: Post) => p.user._id === currentUser._id)
  }

  return { 
    // data
    currentUser,
    isLoading,
    error,
    // func
    refetch,
    getAllUserPosts
  };
};
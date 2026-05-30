import { useCurrentUser } from "@/hooks/useCurrentUser";
import { usePosts } from "@/hooks/usePosts";
import { Post } from "@/types";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import PostCard from "./PostCard";
import { useState } from "react";
import CommentsModal from "./CommentsModal";
import ReplyCard from "./ReplyCard";
// import CommentsModal from "./CommentsModal";

const PostsList = ({ username }: { username?: string }) => {
  const { currentUser } = useCurrentUser();
  const { posts, isLoading, error, refetch, toggleLike, deletePost, checkIsLiked } = usePosts(username);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isOpenReplies, setIsOpenReplies] = useState(false)

  const selectedPost = selectedPostId ? posts.find((p: Post) => p._id === selectedPostId) : null;

  // Workaround for possible typing/exports mismatch of CommentCard


  const handleMessage = (post: Post) => {
    setSelectedPostId(post._id)
    setIsOpenReplies(true)
  }

  if (isLoading) {
    return (
      <View className="p-8 items-center">
        <ActivityIndicator size="large" color="#1DA1F2" />
        <Text className="text-gray-500 mt-2">Loading posts...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="p-8 items-center">
        <Text className="text-gray-500 mb-4">Failed to load posts</Text>
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg" onPress={() => refetch()}>
          <Text className="text-white font-semibold">Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (posts.length === 0) {
    return (
      <View className="p-8 items-center">
        <Text className="text-gray-500">No posts yet</Text>
      </View>
    );
  }

  return (
    <>
      {posts.map((post: Post) => (
        <PostCard
          key={post._id}
          post={post}
          onLike={toggleLike}
          onDelete={deletePost}
          onMessage={() => handleMessage(post)}
          currentUser={currentUser}
          isLiked={checkIsLiked(post.likes, currentUser)}
        />
      ))}

      { isOpenReplies && <CommentsModal selectedPost={selectedPost}
          originalPostItem={() => (
            <PostCard
              formatPost="short"
              post={selectedPost}
              currentUser={currentUser}
            />
          )}
          
          onClose={() => setIsOpenReplies(false)}
          commentsPostItem={(comment: any) => (
            <ReplyCard comment={comment} />
          )
      }
      />}
    </>
  );
};

export default PostsList;
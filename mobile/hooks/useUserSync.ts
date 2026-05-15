import { useEffect } from "react";
import { useAuth } from "@clerk/expo";
import { useMutation } from "@tanstack/react-query";
import { useApiClient, userApi } from "@/utils/api";

export const useUserSync = () => {
  const { isSignedIn } = useAuth();
  const api  = useApiClient();

  const syncUserMutation = useMutation({
    mutationFn: async () => userApi.syncUser(api),
    onSuccess: (response: any) => console.log("User synced successfully:", response.data.user),
    onError: (error) => console.error("Error syncing user:", error),
  });

  useEffect(() => {
    if(isSignedIn && !syncUserMutation.data) {
      syncUserMutation.mutate();
    }
  }, [isSignedIn])

  return null;
}


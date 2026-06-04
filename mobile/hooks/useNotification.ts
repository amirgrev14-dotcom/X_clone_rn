import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useApiClient } from "@/utils/api";

export const useNotifications = () => {

  const api = useApiClient()
  const queryClient = useQueryClient() 

  const { 
    data: notificationsData,
    isRefetching,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => api.get("/notifications"),
    select: (res) => res.data.notifications
  })

  console.log("notificationsData", notificationsData)

  const deleteNotificationMutation = useMutation({
    mutationFn: (notificationId: string) => api.delete(`/notifications/${notificationId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notifications"] }),
  })


  const deleteNotification = (notificationId: string) => {
    deleteNotificationMutation.mutate(notificationId)
  }

  return {
    // data
    isDeletingNotification: deleteNotificationMutation.isPending,
    notifications: notificationsData || [],
    isLoading,
    error,
    isRefetching,
    // func
    deleteNotification,
    refetch,
  }
  


}
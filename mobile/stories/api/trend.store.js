import { apiShema } from "@/stories/api.server.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand"



export const useTrendStore = create((set) => ({
  token: null,
  isLoading: false,

  createTrend: async (data) => {
    await apiShema.createTrend("",data)
  },

  getTrends: async () => {
    await apiShema.getTrends("")
  },

  removeTrend: async (id) => {
    await apiShema.deleteTrend(id)
  },
}))
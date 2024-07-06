import { create } from "zustand"
import { api } from "../services/axios"

interface useCorreiosProps {
    tracking: any;
    getTracking: (code: string) => void
}

export const useCorreios = create<useCorreiosProps>((set) => ({
    tracking: {},
    getTracking: async (code: string) => {
        try {
            const { data } = await (await api.get(`/srorastro/v1/objetos/${code}?resultado=T`))
            set({ tracking: data })
            return data;
        } catch (error) {
            throw error;
        }
    },
}))
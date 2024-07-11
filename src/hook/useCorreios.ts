import { api } from "@/service/axios";
import { create } from "zustand";

interface useCorreiosProps {
    tracking: any;
    cep: string;
    getTracking: (code: string) => void;
    getCep: (code: string) => void;
}

export const useCorreios = create<useCorreiosProps>((set) => ({
    tracking: {},
    cep: "",
    getCep: async (code: string) => {
        const response = await api.get(`https://viacep.com.br/ws/${code}/json/`);
        const data = response.data;
        set({ tracking: data });
    },
    getTracking: async (code: string) => {
        try {
            const response = await api.get(`/api/tracking?code=${code}`);
            const data = response.data;
            set({ tracking: data });
        } catch (error) {
            console.error("Error fetching tracking data:", error);
        }
    }
}));
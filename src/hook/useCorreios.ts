import { api } from "@/service/axios";
import { create } from "zustand";

export interface TokenProps {
    ambiente: string;
    id: string;
    ip: string;
    perfil: string;
    cnpj: string;
    cartaoPostagem: {
        numero: string;
        contrato: string;
        dr: string;
        api: number[];

    };
    emissao: string;
    expiraEm: string;
    zoneOffset: string;
    token: string;
}

interface useCorreiosProps {
    token: TokenProps | null;
    tracking: any;
    cep: string;
    getToken: () => void;
    getTracking: (code: string) => void;
    getCep: (code: string) => void;
}

export const useCorreios = create<useCorreiosProps>((set) => ({
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")!) : null,
    tracking: {},
    cep: "",
    getToken: async () => {
        try {
            const response = await api.post("/api/generate-token");
            const data = response.data;
            localStorage.setItem("token", JSON.stringify(data));
            set({ token: data });
        } catch (error) {
            console.error("Error fetching tracking data:", error);
        }
    },
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
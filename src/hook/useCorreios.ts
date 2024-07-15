import { api } from "@/service/axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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

interface EventsProps {
  codigo: string;
  descricao: string;
  detalhe: string;
  dtHrCriado: string;
  dtLimiteRetirada: string;
  tipo: string;
  unidade: {
    endereco: {
      bairro: string;
      cep: string;
      cidade: string;
      logradouro: string;
      numero: string;
      uf: string;
    };
    tipo: string;
  }
}

interface ObjectsProps {
  altura: number;
  codObjeto: string;
  comprimento: number;
  contrato: string;
  diametro: number;
  eventos: EventsProps[];
  formato: string;
  largura: number;
  modalidade: string;
  peso: number;
  tipoPostal: {
    categoria: string;
    descricao: string;
    sigla: string;
  };
}

export interface TrackingProps {
  objetos: ObjectsProps[];
  quantidade: number;
  tipoResultado: string;
  versao: string;
}

interface CorreiosProps {
  token: TokenProps | null;
  tracking: TrackingProps;
  cep: string;
  getToken: () => void;
  getTracking: (code: string, token: string) => void;
  getCep: (code: string) => void;
}

export const useCorreios = create(
  persist<CorreiosProps>(
    (set) => ({
      token: null,
      tracking: {
        objetos: [],
        quantidade: 0,
        tipoResultado: "",
        versao: "",
      },
      cep: "",
      getToken: async () => {
        try {
          const response = await api.post("/api/generate-token");
          const data = response.data;
          set({ token: data });
        } catch (error) {
          console.error("Error fetching tracking data:", error);
        }
      },
      getCep: async (code: string) => {
        const response = await api.get(
          `https://viacep.com.br/ws/${code}/json/`
        );
        const data = response.data;
        set({ tracking: data });
      },
      getTracking: async (code: string, token: string) => {
        try {
          const response = await api.get(`/api/tracking?code=${code}&token=${token}`);
          const data = response.data;
          set({ tracking: data });
        } catch (error) {
          console.error("Error fetching tracking data:", error);
        }
      },
    }),
    {
      name: "correios",
      getStorage: () => localStorage,
    }
  )
);

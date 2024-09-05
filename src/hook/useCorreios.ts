import { api } from "@/service/axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TokenProps {
  emissao: string;
  expiraEm: string;
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
    nome: string;
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
  mensagem: string;
}

export interface TrackingProps {
  objetos: ObjectsProps[];
  quantidade: number;
  tipoResultado: string;
  versao: string;
}

interface CorreiosProps {
  token: string | null;
  expiresIn: string | null;
  createdAt: string | null;
  tracking: TrackingProps;
  cep: string;
  setTracking: (tracking: TrackingProps) => void;
  getToken: () => void;
  getTracking: (code: string, token: string) => Promise<void>;
  getCep: (code: string) => void;
}

export const useCorreios = create(
  persist<CorreiosProps>(
    (set) => ({
      token: null,
      expiresIn: null,
      createdAt: null,
      tracking: {
        objetos: [],
        quantidade: 0,
        tipoResultado: "",
        versao: "",
      },
      cep: "",
      setTracking: (tracking) => set({ tracking }),
      getToken: async () => {
        try {
          const response = await api.post("/api/generate-token");
          const data = response.data;
          set({ token: data.token, expiresIn: data.expiraEm, createdAt: data.emissao });
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
          return data.token;
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

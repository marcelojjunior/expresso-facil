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

export interface StateProps {
  id: number;
  nome: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  }
  sigla: string;
}

export interface CityProps {
  nome: string;
  codigo_ibge: string;
}

export interface TrackingProps {
  objetos: ObjectsProps[];
  quantidade: number;
  tipoResultado: string;
  versao: string;
}

export interface CepProps {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ddd: string;
}

interface CorreiosProps {
  token: string | null;
  expiresIn: string | null;
  createdAt: string | null;
  tracking: TrackingProps;
  searched: string;
  cep: CepProps[] | [];
  setSearched: (searched: string) => void;
  setCep: (cep: CepProps[]) => void;
  setTracking: (tracking: TrackingProps) => void;
  getToken: () => void;
  getTracking: (code: string, token: string) => Promise<void>;
  getCep: (state: string, city: string, address: string) => Promise<CepProps[]>;
  getStates: () => Promise<StateProps[]>;
  getCities: (code: string) => Promise<CityProps[]>;
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
      searched: "",
      cep: [],
      setSearched: (searched) => set({ searched }),
      setCep: (cep) => set({ cep }),
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
      getCep: async (state: string, city: string, address: string) => {
        try {
          const { data } = await api.get(
            `https://viacep.com.br/ws/${state}/${city}/${address}/json/`
          );
          return data;
        } catch (error) {
          console.error("Error fetching tracking data:", error);
        }
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
      getStates: async () => {
        const { data } = await api.get("https://brasilapi.com.br/api/ibge/uf/v1");
        return data;
      },
      getCities: async (code: string) => {
        const { data } = await api.get(`https://brasilapi.com.br/api/ibge/municipios/v1/${code}`);
        return data;
      },
    }),
    {
      name: "correios",
      getStorage: () => localStorage,
    }
  )
);

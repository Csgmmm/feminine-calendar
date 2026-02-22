import type { ICycles, ILogs, IUsers } from "../types/types";

//Adiciono a API aqui:
const apiURLogs = "https://6999c6659a9ce1d259f2acf2.mockapi.io/api/v1/logs";
const apiURLCycles =
  "https://6999c6659a9ce1d259f2acf2.mockapi.io/api/v1/cycles";
const apiURLUsers = "https://699b3d60377ac05ce28fd5db.mockapi.io/api/v1/Users";

//Como há 3 API, Fazer fetch:
export const getLogs = async (): Promise<ILogs[]> => {
  const response = await fetch(apiURLogs);
  if (!response.ok) throw new Error("Erro ao buscar logs");
  const data = await response.json();
  return data;
};

export const getCycles = async (): Promise<ICycles[]> => {
  const response = await fetch(apiURLCycles);
  if (!response.ok) throw new Error("Erro ao buscar cycles");
  const data = await response.json();
  return data;
};

export const getUsers = async (): Promise<IUsers[]> => {
  const response = await fetch(apiURLUsers);
  if (!response.ok) throw new Error("Erro ao buscar users");
  const data = await response.json();
  return data;
};


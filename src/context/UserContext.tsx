//Cria o depósito global do user ativo, acessível na app toda.

import { createContext, useContext, useEffect, useState } from "react";
import { getUsers } from "../services/api";
import type { IUsers } from "../types/types";

//Define o tipo de contexto que vou usar.
export interface IUserContext {
  users: IUsers[]; //array com todos os users da API
  activeUser: IUsers | null; //o user selecionado
  setActiveUser: (user: IUsers) => void; // função chamada setActiveUser. a função recebe um argumento chamado user, que deve ser do tipo IUsers (interface no types.ts). Void nao retorna nada, a função apenas funciona sem retorno.
}

// Define o que vai estar disponível globalmente: a lista de users, o user ativo, e a função para mudar o user ativo.
// Os valores passados no createContext são apenas defaults (usados se não houver Provider)
export const UserContext = createContext<IUserContext>({
  users: [],
  activeUser: null,
  setActiveUser: () => {}, //função vazia, porque o valor real será fornecido pelo UserProvider.
});

//fornecer dados





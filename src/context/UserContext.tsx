import { createContext, useContext, useEffect, useState } from "react";
import { getUsers } from "../services/api";
import type { IUsers } from "../types/types";

export interface IUserContext {
    users: IUsers[], //array com todos os users da API
    activeUser: IUsers | null, //o user selecionado, ou null se ainda não há nenhum
    setActiveUser: (user: IUsers) => void; // void não retorna nada, esta função só atualiza o estado, não devolve nada
}
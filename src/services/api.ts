import type { ILogs } from "../types/types";

//Adiciono a API aqui:
const apiURLogs = "https://6999c6659a9ce1d259f2acf2.mockapi.io/api/v1/logs";
const apiURLCycles =
  "https://6999c6659a9ce1d259f2acf2.mockapi.io/api/v1/cycles";

//Como há 2 API, Fazer fetch do Logs:
export const getLogs = async (): Promise<[]> => {
  //o Logs vai ser um array de objects
  const response = await fetch(`${apiURLogs}`);
  const data = await response.json();
  return data;
};

export const getCycles = async (): Promise<[]> => {
  const response = await fetch(`${apiURLCycles}`);
  const data = await response.json();
  return data;
};

const getLogsAPI: ILogs[]  = [
  {
    id: "1",
    date: "2026-02-21",
    bleeding: { intensity: "heavy", color: "bright_red", clots: false },
    pain: ["cramps", "headache"],
    mood: ["sensitive", "energetic"],
    cravings: ["chocolate", "sugar"],
    energy: ["low"],
    notes: "Início do ciclo."
  },
  {
    id: "2",
    date: "2026-02-22",
    mood: ["calm"],
    cravings: ["carbs"],
    activity: { sleep_hours: 7 }
  },
  {
    id: "3",
    date: "2026-02-23"
  },
  {
    id: "4",
    date: "2026-02-24",
    bleeding: { intensity: "spotting", color: "brown" },
    pain: ["bloating"],
    mood: ["calm"],
    skin: ["dry"]
  },
  {
    id: "5",
    date: "2026-02-25",
    pain: ["none"],
    mood: ["happy"],
    cravings: ["none"],
    activity: { exercise: "gym", sleep_hours: 9 }
  },
  {
    id: "6",
    date: "2026-03-01",
    bleeding: { intensity: "none" },
    mood: ["happy", "energetic"],
    cravings: ["sugar"],
    skin: ["clear"]
  },
  {
    id: "7",
    date: "2026-03-10",
    activity: { sexual_activity: true, sex_life: "protected" },
    energy: ["high"],
    notes: "Ovulação. Pico de energia."
  },
  {
    id: "8",
    date: "2026-03-18",
    pain: ["bloating", "breast"],
    mood: ["irritable", "anxious"],
    cravings: ["chocolate", "carbs"],
    hair: ["oily"],
    activity: { sleep_hours: 6 }
  }

];

console.log(getLogsAPI);

const getCyclesAPI = [
  {
    id: "1",
    startDate: "2026-01-20",
    endDate: "2026-01-25",
    length: 28,
    is_unusual: false,
  },
  {
    id: "2",
    startDate: "2025-12-23",
    endDate: "2025-12-28",
    length: 29,
    is_unusual: false,
  },
  {
    id: "3",
    startDate: "2026-02-20T22:33:26.391Z",
    endDate: "Daisy Bergstrom",
    length: 43,
    is_unusual: false,
  },
  {
    id: "4",
    startDate: "2026-02-20T19:13:16.198Z",
    endDate: "Alicia O'Keefe",
    length: 10,
    is_unusual: false,
  },
  {
    id: "5",
    startDate: "2026-02-20T15:34:20.022Z",
    endDate: "Roderick D'Amore",
    length: 40,
    is_unusual: false,
  },
  {
    id: "6",
    startDate: "2026-02-21T04:20:52.879Z",
    endDate: "Carroll Lynch",
    length: 38,
    is_unusual: false,
  },
  {
    id: "7",
    startDate: "2026-02-21T11:52:09.600Z",
    endDate: "Dean O'Kon V",
    length: 13,
    is_unusual: false,
  },
  {
    id: "8",
    startDate: "2026-02-21T13:16:11.241Z",
    endDate: "Jeanne Harber",
    length: 83,
    is_unusual: false,
  },
];

console.log(getCyclesAPI);

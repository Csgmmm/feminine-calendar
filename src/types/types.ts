export interface ILogs {
    id: string;
    date: string;
    bleeding?: Bleeding;
    pain?: Pain[];
    mood?: Mood[];
    cravings?: Cravings[];
    energy?: Energy[];
    skin?: Skin[];
    hair?: Hair[];
    activity?: Activity;
    notes?: string;

}

export type Bleeding = {
    intensity?: "none" | "light" | "medium" | "spotting" | "heavy";
    color?: string;
    clots?: boolean;
    spotting?: "none" | "light" | "medium" | "heavy";
}

export type Activity = {
sleep_hours?: number;
exercise?: string;
sexual_activity?: boolean;
sex_life?: "none" | "low_drive" | "protected";
}

type Pain = "cramps" | "headache" | "lower_back" | "bloating" | "breast" | "none";
type Mood = "sensitive" | "energetic" | "calm" | "happy" | "irritable" | "anxious";
type Cravings = "chocolate" | "sugar" | "carbs" | "salt" | "none";
type Energy = "low" | "medium" | "high";
type Skin = "oily" | "acne" | "sensitive" | "dry" | "clear";
type Hair = "oily" | "dry" | "normal";
export type Difficulty =
  | "Beginner-Friendly"
  | "Intermediate"
  | "Advanced";

export type Technology = {
  id: number;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps"
    | "Tools";
  description: string;
  icon: string;
  rating: number;
  difficulty: Difficulty;
  badge: string;
};


type LeagueStatus = "Draft Live" | "Pre-Draft" | "Post-Draft";

export interface League {
  id: number;
  name: string;
  image: string;
  status: LeagueStatus;
}

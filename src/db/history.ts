import { supabase } from "../../supabase";

export const updateTransaction = async (
  team_id: string,
  stock: string,
  amount: number,
  round: number,
  returns: number,
  score: number
) => {
  const { data, error } = await supabase
    .from("history")
    .insert([
      {
        team_id: team_id,
        stock: stock,
        amount: amount,
        round: round,
        returns: returns,
        score: score,
      },
    ])
    .select();

  if (error !== null) {
    return error;
  } else {
    return data;
  }
};

export const getScoreByTeamAndRound = async (
  team_id: string,
  round: number
) => {
  let { data: transactions, error } = await supabase
    .from("history")
    .select("score")
    .eq("team_id", team_id)
    .eq("round", round);

  if (error !== null) {
    return error;
  } else {
    return transactions;
  }
};

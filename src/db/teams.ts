import { supabase } from "../../supabase";

export const getTeam = async (id:string) => {
    let { data: team, error } = await supabase.from("team").select("*").eq("id", id);
  
    if (error !== null) {
      return error;
    } else {
      return team;
    }
  };


export const setTeam = async (id:string, name:string, balance:number,score:number, round:number) => {
    const { data, error } = await supabase
    .from("team")
    .insert([
      { id: id, name: name, balance: balance, round: round},
    ])
    .select();

    if(error !== null){
        return error;
    }else{
        return data;
    }
}


export const updateBalance = async (id:string, balance:number) => {
    const { data, error } = await supabase
    .from("team")
    .update({ balance: balance })
    .eq("id", id)
    .select();

    if(error !== null){
        return error;
    }else{
        return data;
    }
}

export const updateScore = async (id:string, score:number) => {
    const { data, error } = await supabase
    .from("team")
    .update({ score: score })
    .eq("id", id)
    .select();

    if(error !== null){
        return error;
    }else{
        return data;
    }
}


export const updateRound = async (id:string, round:number) => {
    const { data, error } = await supabase
    .from("team")
    .update({ round: round })
    .eq("id", id)
    .select();

    if(error !== null){
        return error;
    }else{
        return data;
    }
}
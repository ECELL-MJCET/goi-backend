import { supabase } from "../../supabase";

export const postTsx = async (
  round: number,
  stock_name: string,
  current: string,
  future: string,
  profit: boolean,
  returns: number
) => {
  const { data, error } = await supabase
    .from("tesx")
    .insert([
      { round: round, stock_name: stock_name, current: current, future: future, profit: profit, returns: returns},
    ])
    .select();

    if(error !== null){
        return error;
    }else{
        return data;
    }
};

export const postNafidia = async (
  round: number,
  stock_name: string,
  current: string,
  future: string,
  profit: boolean,
  returns: number
) => {
    console.log(round, stock_name, current, future, profit, returns);
  const { data, error } = await supabase
    .from("nafidia")
    .insert([
      { round: round, stock_name: stock_name, current: current, future: future, profit: profit, returns: returns },
      
    ])
    .select();

    if(error !== null){
        return error;
    }else{
        return data;
    }
};

export const postAbidas = async (
  round: number,
  stock_name: string,
  current: string,
  future: string,
  profit: boolean,
  returns: number
) => {
  const { data, error } = await supabase
    .from("abidas")
    .insert([
      { round: round, stock_name: stock_name, current: current, future: future, profit: profit, returns: returns},
      
    ])
    .select();

    if(error !== null){
        return error;
    }else{
        return data;
    }
};

export const postPio = async (
  round: number,
  stock_name: string,
  current: string,
  future: string,
  profit: boolean,
  returns: number
) => {
  const { data, error } = await supabase
    .from("pio")
    .insert([
      { round: round , stock_name: stock_name, current: current, future: future, profit: profit, returns: returns},
    ])
    .select();

    if(error !== null){
        return error;
    }else{
        return data;
    }
};

export const postTara = async (
  round: number,
  stock_name: string,
  current: string,
  future: string,
  profit: boolean,
  returns: number
) => {
  const { data, error } = await supabase
    .from("tara")
    .insert([
      { round: round, stock_name: stock_name, current: current, future: future, profit: profit, returns: returns},
    ])
    .select();

    if(error !== null){
        return error;
    }else{
        return data;
    }
};

export const postVa = async (
  round: number,
  stock_name: string,
  current: string,
  future: string,
  profit: boolean,
  returns: number
) => {
  const { data, error } = await supabase
    .from("va")
    .insert([
      { round: round, stock_name: stock_name, current: current, future: future, profit: profit, returns: returns},
    ])
    .select();

    if(error !== null){
        return error;
    }else{
        return data;
    }
    
};

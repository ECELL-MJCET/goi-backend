import { supabase } from "../../supabase";


export const getTsx = async (round:number) => {
    let { data: tesx, error } = await supabase.from("tesx").select("*").eq("round", round);
  
    if (error !== null) {
      return error;
    } else {
      return tesx;
    }
  };

  export const getnafidia = async (round:number) => {
    let { data: tesx, error } = await supabase.from("nafidia").select("*").eq("round", round);
  
    if (error !== null) {
      return error;
    } else {
      return tesx;
    }
  };

  export const getAbidas = async (round:number) => {
    let { data: abidas, error } = await supabase.from("abidas").select("*").eq("round", round);
  
    if (error !== null) {
      return error;
    } else {
      return abidas;
    }
  };

  export const getPio = async (round:number) => {
    let { data: pio, error } = await supabase.from("pio").select("*").eq("round", round);
  
    if (error !== null) {
      return error;
    } else {
      return pio;
    }
  };

  export const getTara = async (round:number) => {
    let { data: tara, error } = await supabase.from("tara").select("*").eq("round", round);
  
    if (error !== null) {
      return error;
    } else {
      return tara;
    }
  };

  export const getVa = async (round:number) => {
    let { data: va, error } = await supabase.from("va").select("*").eq("round", round);
  
    if (error !== null) {
      return error;
    } else {
      return va;
    }
  };

import { supabase } from "../../supabase";




export const getReturnsAndCalulateScore = async (stock:string,amount:number,round:number): Promise<{ returns: number; score: number; }> => {

    const { data: transactions, error } = await supabase
        .from(stock)
        .select("returns")
        .eq("round", round);

    if (error !== null) {
        throw error;
    } else {

        // Get the return which got from server and calculate the score based on the amount of stock bought
        let returns = transactions[0].returns;
        let score = returns * amount;
       
        

        return {returns,score};
    }

}
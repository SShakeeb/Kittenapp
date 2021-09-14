import axios from "axios";
import type { UnsavedCatname, APIResult } from "../types";

const createCatServices = async (unsavedcat: UnsavedCatname): Promise<APIResult<string>> => {
  try{
      console.log("db:",unsavedcat)
    const { data } = await axios.post('http://localhost:10000/v1/cats',unsavedcat);
    return { data, error: null };
  } catch (error) {
      return { data: null, error: null };
  } 
};

export default createCatServices;
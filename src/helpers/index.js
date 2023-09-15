import axios from "axios";
import { options } from "../consntants";

axios.defaults.baseURL = "https://youtube138.p.rapidapi.com";

// parametre olarak url alıp
// istek atar
// verileri fonksiyonun çağrıldığı yere yönlendirir.
export const getData = async (url) => {
  try {
    const res = await axios.get(url, options);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

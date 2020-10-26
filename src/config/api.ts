import Axios from "axios";

const api = Axios.create({
  baseURL: "https://api.unimed.coop.br/unimed/v3",
  
});

export default api;

import axios from "axios";

const URL = "http://localhost:3000/feriados/";

class Api {
  static getAll = async () => {
    try {
      const response = await axios.get(`${URL}getAll`);
      return response.data;
    } catch (error) {}
  };
}

export default Api;

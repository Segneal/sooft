import axios from "axios";

const URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";

class Api {
  static getAll = async () => {
    try {
      const response = await axios.get(`${URL}/feriados/getAll`);
      return response.data;
    } catch (error) {}
  };
}

export default Api;

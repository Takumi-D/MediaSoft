import axios from "axios";

export default class ServicePosts {
  public getData = async (): Promise<Response> => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );

      if (response.status !== 200) {
        throw new Error(`Что-то пошло не так! ${response.status}`);
      }

      return await response.data;
    } catch (error) {
      throw new Error(`Что-то пошло не так... ${error}`);
    }
  };
}

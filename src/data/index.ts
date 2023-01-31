import { BORED_API } from "../consts";

export const fetchApiData = async (): Promise<void> => {
  try {
    const response = await fetch(BORED_API);
    return await response.json();
  } catch (error) {
    console.log("Error:", error);
  }
};

import axios from "axios";

// Fetching batteries using short codes.
export const fetchBatteries = async (shortCodes) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/batteries/for-display`,
      shortCodes.map(codeObj => codeObj.short_code)
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching batteries:", error);
    throw error;
  }
};

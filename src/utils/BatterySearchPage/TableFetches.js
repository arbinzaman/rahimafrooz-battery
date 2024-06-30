import axios from "axios";

// Fetching batteries using short codes.
export const fetchBatteries = async (shortCodes) => {
  try {
    const response = await axios.post(
      "https://rahimafrooz-battery-backend.vercel.app/api/v1/batteries/for-display",
      shortCodes.map(codeObj => codeObj.short_code)
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching batteries:", error);
    throw error;
  }
};

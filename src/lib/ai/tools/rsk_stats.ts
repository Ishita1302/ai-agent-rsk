import { Tool } from "../types";

export const rskStatsTool: Tool = {
  type: 'server',
  definition: {
    type: "function",
    function: {
      name: "get_rsk_stats",
      description: "Get current statistics for the Rootstock testnet (average block time, total transactions, market cap, etc.)",
      parameters: {
        type: "object",
        properties: {},
      },
    },
  },
  handler: async () => {
    try {
      const response = await fetch("https://rootstock-testnet.blockscout.com/api/v2/stats");
      if (!response.ok) {
        throw new Error("Failed to fetch stats");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch stats:", error);
      return { error: "Failed to fetch stats" };
    }
  },
};

import { Tool } from "../types";

export const transferTool: Tool = {
  type: 'client',
  definition: {
    type: "function",
    function: {
      name: "transfer",
      description: "Transfer tokens from the user's wallet to another address",
      parameters: {
        type: "object",
        properties: {
          address: {
            type: "string",
            description: "Recipient wallet address",
          },
          token1: {
            type: "string",
            description: "Token symbol to transfer (e.g., TRBTC, DOC, RIF)",
          },
          amount: {
            type: "number",
            description: "Amount of tokens to transfer",
          },
        },
        required: ["address", "token1", "amount"],
      },
    },
  },
};

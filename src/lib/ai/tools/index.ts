import { transferTool } from "./transfer";
import { balanceTool } from "./balance";
import { rskStatsTool } from "./rsk_stats";
import { recentTransactionsTool } from "./transactions";
import { Tool } from "../types";


export const tools: Tool[] = [
  transferTool,
  balanceTool,
  rskStatsTool,
  recentTransactionsTool,
];

export const toolsMap = tools.reduce((acc, tool) => {
  acc[tool.definition.function.name] = tool;
  return acc;
}, {} as Record<string, Tool>);

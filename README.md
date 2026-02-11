# Rootstock AI Agent

A personal DeFi assistant for the Rootstock testnet ecosystem, powered by AI. This agent helps users interact with the Rootstock blockchain, check balances, transfer tokens, and fetch transaction history using natural language.

## Features

- **Natural Language Interface**: Chat with the agent to perform blockchain actions.
- **Wallet Integration**: Connect your Rootstock testnet wallet.
- **Token Transfers**: Send TRBTC and other tokens using AI commands.
- **Balance Checks**: Query your wallet balance for TRBTC, tRIF, and tDOC.
- **Transaction History**: Fetch and summarize recent transactions from Blockscout.
- **Rootstock Stats**: Get current stats of the Rootstock network.
- **Modular Tool System**: Extensible architecture for adding new AI skills.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **AI/LLM**: [Groq](https://groq.com/) (Llama 3 models)
- **Blockchain Interaction**: [Wagmi](https://wagmi.sh/) & [Viem](https://viem.sh/)
- **Wallet Connection**: [AppKit](https://reown.com/appkit) (formerly Web3Modal)
- **Styling**: Tailwind CSS & Shadcn/ui
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js (v18+)
- NPM or Yarn
- A Rootstock Testnet Wallet (e.g., MetaMask)
- Groq API Key

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-agent-rsk
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_PROJECT_ID=your_reown_project_id
   GROQ_API_KEY=your_groq_api_key
   NEXT_PUBLIC_RPC_TESTNET=https://public-node.testnet.rsk.co
   NEXT_PUBLIC_RPC_MAINNET=https://public-node.rsk.co
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/api/ai`: API route handling AI requests and tool execution.
- `src/lib/ai/tools`: Modular tool definitions (Transactions, Balance, Transfer, etc.).
- `src/config`: Wagmi and AppKit configuration.
- `src/components`: UI components (Chat interface, Wallet connection).

## Contributing

We welcome community contributions! To add a new "AI skill":
1. Create a new tool file in `src/lib/ai/tools`.
2. Define the tool interface and handler.
3. Register the tool in `src/lib/ai/tools/index.ts`.

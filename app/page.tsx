"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  
  // Mock data for demonstration
  const agents = [
    { id: 1, name: "Alpha Trader", level: 5, winRate: "68%", specialty: "Yield Farming" },
    { id: 2, name: "Quantum Arb", level: 7, winRate: "72%", specialty: "Flash Loans" },
    { id: 3, name: "Risk Guardian", level: 4, winRate: "61%", specialty: "Risk Management" },
    { id: 4, name: "Yield Hunter", level: 6, winRate: "65%", specialty: "APR Optimization" },
  ];
  
  const currentChallenge = {
    name: "Uniswap V3 Liquidity Optimization",
    deadline: "5 days left",
    prize: "5,000 USDC + NFT",
    difficulty: "Medium",
    participants: 128
  };
  
  const leaderboard = [
    { rank: 1, agent: "DefiKing", player: "0x8f...3e4a", score: 9845 },
    { rank: 2, agent: "YieldMaster", player: "0x7c...9f2b", score: 9721 },
    { rank: 3, agent: "FlashWizard", player: "0x2a...6c8d", score: 9654 },
    { rank: 4, agent: "ArbitrageBot", player: "0x4d...1a7e", score: 9532 },
    { rank: 5, agent: "RiskHedger", player: "0x9b...5f3c", score: 9487 },
  ];
  
  const connectWallet = () => {
    setWalletConnected(true);
  };
  
  const simulateBattle = () => {
    // In a real app, this would trigger the battle simulation
    alert("Battle simulation started!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-md border-b border-purple-500/20">
        <div className="flex items-center gap-2">
         
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            DeFi Agents
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-300 hover:text-white transition">Challenges</Link>
          <Link href="#" className="text-gray-300 hover:text-white transition">Marketplace</Link>
          <Link href="#" className="text-gray-300 hover:text-white transition">Learn</Link>
          <button 
            onClick={connectWallet}
            className={`rounded-full px-4 py-2 font-medium text-sm transition-all ${
              walletConnected 
                ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            }`}
          >
            {walletConnected ? "0x71...3e4F" : "Connect Wallet"}
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Battle with AI Agents in DeFi Arenas
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create, train, and battle AI Agents that perform DeFi challenges to earn real rewards.
            Compete weekly on new financial battlefields.
          </p>
        </div>

        {/* Current Challenge Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-purple-500/20 shadow-lg shadow-purple-500/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400 font-medium">Active Challenge</span>
              </div>
              <h2 className="text-2xl font-bold mb-1">{currentChallenge.name}</h2>
              <p className="text-gray-400">{currentChallenge.deadline} • {currentChallenge.participants} participants</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-purple-900/50 rounded-lg px-4 py-2 mb-2">
                <span className="text-purple-300">Prize Pool:</span>
                <span className="ml-2 font-bold text-white">{currentChallenge.prize}</span>
              </div>
              <span className="text-sm text-gray-400">Difficulty: {currentChallenge.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Agent Selection */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg shadow-purple-500/10 h-full">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Your Agents
              </h2>
              
              <div className="space-y-3">
                {agents.map(agent => (
                  <div 
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent)}
                    className={`cursor-pointer transition-all p-3 rounded-lg ${
                      selectedAgent?.id === agent.id 
                        ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50" 
                        : "hover:bg-gray-700/50 border border-gray-700"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{agent.name}</span>
                      <span className="text-xs px-2 py-1 bg-gray-700 rounded-full">Lvl {agent.level}</span>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-400">
                      <span>{agent.specialty}</span>
                      <span className="text-green-400">{agent.winRate} win</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-2 rounded-lg border border-dashed border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-colors">
                + Create New Agent
              </button>
            </div>
          </div>
          
          {/* Battle Simulation & Leaderboard */}
          <div className="lg:col-span-2 space-y-8">
            {/* Battle Simulation */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg shadow-purple-500/10">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Battle Simulation
              </h2>
              
              <div className="h-64 flex flex-col items-center justify-center bg-gray-900/50 rounded-lg border border-gray-700 mb-4">
                {selectedAgent ? (
                  <div className="text-center">
                    <div className="text-xl font-bold mb-2">{selectedAgent.name} is ready to battle!</div>
                    <p className="text-gray-400 mb-4">Specialty: {selectedAgent.specialty}</p>
                    <button 
                      onClick={simulateBattle}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                    >
                      Start Battle Simulation
                    </button>
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p>Select an agent to start a battle simulation</p>
                  </div>
                )}
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Simulations help you test your agent's strategy before entering the real challenge.</p>
              </div>
            </div>
            
            {/* Leaderboard */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg shadow-purple-500/10">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
                </svg>
                Leaderboard
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-700">
                      <th className="pb-2 font-medium">Rank</th>
                      <th className="pb-2 font-medium">Agent</th>
                      <th className="pb-2 font-medium">Player</th>
                      <th className="pb-2 font-medium text-right">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map(item => (
                      <tr key={item.rank} className="border-b border-gray-800 hover:bg-gray-700/20">
                        <td className="py-3">
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                            item.rank === 1 ? "bg-yellow-500/20 text-yellow-300" :
                            item.rank === 2 ? "bg-gray-400/20 text-gray-300" :
                            item.rank === 3 ? "bg-amber-600/20 text-amber-400" :
                            "text-gray-400"
                          }`}>
                            {item.rank}
                          </span>
                        </td>
                        <td className="py-3 font-medium">{item.agent}</td>
                        <td className="py-3 text-gray-400">{item.player}</td>
                        <td className="py-3 text-right font-mono">{item.score.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              
              <div className="text-center mt-4">
                <button className="text-sm text-purple-400 hover:text-purple-300 transition">
                  View Full Leaderboard →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 border border-purple-500/10">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Create Agents</h3>
            <p className="text-gray-400">Design and train AI agents with unique strategies for DeFi operations.</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 border border-purple-500/10">
            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Weekly Challenges</h3>
            <p className="text-gray-400">Compete in new DeFi challenges each week from yield farming to flash loans.</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 border border-purple-500/10">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Earn Real Rewards</h3>
            <p className="text-gray-400">Win funding, NFTs, governance tokens, and vault shares for your performance.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
               
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  DeFi Agents
                </span>
              </div>
              <p className="text-sm text-gray-400">
                The ultimate AI agent battle platform for DeFi
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition">About</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Documentation</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Challenges</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Marketplace</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Community</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Blog</Link>
            </div>
            
            <div className="mt-6 md:mt-0 flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
               

              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>© 2023 DeFi Agents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

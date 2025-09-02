import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WalletConnect = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleWalletConnect = async () => {
    if (isConnected) return;
    
    setIsConnecting(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
      toast({
        title: "Wallet Connected!",
        description: "Your wallet has been successfully connected to My Identity.",
      });
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md p-8 shadow-card hover-lift bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-glow mb-4 transition-all duration-500 ${
            isConnected ? 'bg-green-500' : 'bg-gradient-primary'
          }`}>
            {isConnected ? (
              <Check className="w-8 h-8 text-white" />
            ) : (
              <Wallet className="w-8 h-8 text-primary-foreground" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            {isConnected ? 'Wallet Connected' : 'Connect Your Wallet'}
          </h2>
          <p className="text-muted-foreground">
            {isConnected 
              ? 'Your wallet is successfully connected to My Identity'
              : 'Securely connect your Web3 wallet to get started with My Identity'
            }
          </p>
        </div>

        {/* Connect Button */}
        <Button
          onClick={handleWalletConnect}
          disabled={isConnecting || isConnected}
          variant={isConnected ? "secondary" : "wallet"}
          size="lg"
          className={`w-full transition-all duration-500 ${
            isConnected ? 'cursor-default' : 'hover-glow'
          }`}
        >
          {isConnecting ? (
            <>
              <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
              Connecting...
            </>
          ) : isConnected ? (
            <>
              <Check className="w-5 h-5 mr-2 text-green-600" />
              Connected
            </>
          ) : (
            <>
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </>
          )}
        </Button>

        {/* Trust Indicators */}
        <div className="text-center space-y-1 pt-2">
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Secure
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              Private
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              Decentralized
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WalletConnect;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Wallet, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WalletConnect = () => {
  const [referralCode, setReferralCode] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const handleWalletConnect = async () => {
    setIsConnecting(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false);
      toast({
        title: "Wallet Connection",
        description: "This is a demo. In production, this would connect to your Web3 wallet.",
      });
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md p-8 shadow-card hover-lift bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow mb-4">
            <Wallet className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Connect Your Wallet</h2>
          <p className="text-muted-foreground">
            Securely connect your Web3 wallet to get started with My Identity
          </p>
        </div>

        {/* Referral Code Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Users className="w-4 h-4" />
            Referral Code (Optional)
          </label>
          <Input
            type="text"
            placeholder="Enter referral code"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            className="bg-background/50 border-border/50 focus:border-primary transition-colors"
          />
          <p className="text-xs text-muted-foreground">
            If someone invited you, enter their referral code here
          </p>
        </div>

        {/* Connect Button */}
        <Button
          onClick={handleWalletConnect}
          disabled={isConnecting}
          variant="wallet"
          size="lg"
          className="w-full hover-glow"
        >
          {isConnecting ? (
            <>
              <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
              Connecting...
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
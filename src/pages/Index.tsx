import WalletConnect from "@/components/WalletConnect";
import { Shield, Zap, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Custom gradient background matching uploaded image */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, 
            hsl(260, 60%, 85%) 0%, 
            hsl(0, 0%, 98%) 50%, 
            hsl(180, 40%, 85%) 100%)`
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">My Identity</h1>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Digital
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">
                    Identity
                  </span>
                  Secured
                </h2>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Connect your wallet to access a secure, decentralized identity platform 
                  built for the future of Web3.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-slide-up">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Bank-grade Security</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Lightning Fast</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lock className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Fully Private</span>
                </div>
              </div>
            </div>

            {/* Right Content - Wallet Connect */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <WalletConnect />
            </div>

          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              Powered by Web3 technology. Your keys, your identity, your control.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
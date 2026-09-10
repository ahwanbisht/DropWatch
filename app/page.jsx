import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 flex justify-between items-center">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src={"/drop-watch-logo.png"} 
              alt="Drop Watch Logo"
              width = {600}
              height = {200}
              className="w-auto h-10"
            />
          </div>
        
          {/* Auth Button */}
          <Button>Sign In</Button>
        </div>
      </header>
    </main>
  );
}

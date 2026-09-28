import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogIn, Rabbit, Shield, Bell } from "lucide-react";
import AddProductForm from "@/components/AddProductForm";

export default function Home() {
  const user=null;
  const products = [];
  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
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
          <Button 
          variant="default" 
          size="sm" 
          className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </Button>
        </div>
      </header>

      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-2 rounded-full mb-6 text-sm font-medium">
            Made with Caffeine, Debugged with tears.
          </div>

          <h2 className="text-5xl font-bold mb-4 text-gray-900 tracking-tight">Never miss a price drop.</h2>

          <p className="text-xl text-gray-600 mb-12 mx-auto max-w-2xl">
            Track prices across multiple e-commerce sites and get notified instantly when they drop below your target. Save money effortlessly.
          </p>

          {/* Add product form */}
          <AddProductForm user={user} />

          {/* Features */}
          {products.length === 0 && (
            <div className="grid md:grid-cols-3 gap-6 mx-auto max-w-4xl mt-16">
              {FEATURES.map(({ icon: Icon, title, description}, index) => (
                <div key={title} className="bg-white rounded-xl border p-6 border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              ))}
            </div>
            )}
        </div>
      </section>
    </main>
  );
}

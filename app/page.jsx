import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogIn, Rabbit, Shield, Bell, TrendingDown } from "lucide-react";
import AddProductForm from "@/components/AddProductForm";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { getProducts } from "./actions";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const supabase = await createClient();
  const { 
    data: { user }, 
  } = await supabase.auth.getUser();



  const products = user ? await getProducts() : [];
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
          <AuthButton user={user} />


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

      {user && products.length > 0 && <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900"> Your Tracked Products</h3>
            <span className="text-sm text-gray-500">
              {products.length} {products.length === 1 ? "product" : "products"}
            </span>
          </div>
          <div className="grid gp-6 md:grid-cols-2 items-start">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </section>}

      {user && products.length === 0 && (
        <section className="max-w-2xl mx-auto px-4 pb-20 text-center">
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12">
            <TrendingDown className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products yet
            </h3>
            <p className="text-gray-600">
              Add your first product above to start tracking prices!
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

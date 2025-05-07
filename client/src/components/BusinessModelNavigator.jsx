import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Tag } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import tags and models from your data file
import models from "../data/models.json";
const tags = ["B2B", "B2C", "Subscription", "Product", "Recurring", "Platform"];

export default function BusinessModelNavigator() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = { 
    // Simulate the navigate function for the demo
    navigate: (path) => console.log(`Would navigate to: ${path}`) 
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simulating auth check - your actual implementation will use Firebase
        const user = true; // This would be from auth
        const hasToken = true; // This would be from Cookies.get("authToken")

        if (!user || !hasToken) {
          // Redirect non-logged-in users to the login page
          if (window.location.pathname !== "/login") {
            navigate("/login");
          }
        } else {
          // Redirect logged-in users away from the login page
          if (window.location.pathname === "/login") {
            navigate("/business-model-navigator");
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredModels = models.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(search.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => model.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-lg font-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Onpitch Business Model Navigator
          </h1>
          <p className="text-gray-600">
            Explore and discover the right business model for your startup
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search business models..."
              className="pl-10 bg-gray-50 border-gray-200"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <div className="flex items-center gap-2 mb-3">
              <Tag size={16} className="text-gray-500" />
              <span className="font-medium text-gray-700">Filter by tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                    ${selectedTags.includes(tag) 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredModels.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No business models match your criteria</p>
            <button 
              className="mt-4 text-blue-600 hover:underline"
              onClick={() => {
                setSearch("");
                setSelectedTags([]);
              }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-4">Showing {filteredModels.length} business models</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModels.map(model => (
                <Card 
                  key={model.name} 
                  className="hover:shadow-lg transition-all duration-200 border-gray-200 overflow-hidden cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="h-2 bg-blue-600"></div>
                    <div className="p-5">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{model.name}</h2>
                      <p className="text-gray-600 mb-4">{model.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {model.tags.map(tag => (
                          <span 
                            key={tag} 
                            className={`text-xs px-2 py-1 rounded-full ${
                              selectedTags.includes(tag) 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
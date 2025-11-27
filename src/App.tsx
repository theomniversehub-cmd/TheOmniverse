import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ArticleCard from './components/ArticleCard';
import ArticleView from './components/ArticleView';
import Footer from './components/Footer';
import { articles, Article } from './data/articles';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(''); // <--- ADDED SEARCH STATE
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // UPDATED FILTER LOGIC: Checks both Category AND Search Text
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        onCategoryChange={setSelectedCategory}
        currentCategory={selectedCategory}
        onSearch={setSearchQuery} // <--- PASSING SEARCH FUNCTION TO HEADER
      />

      {/* Hide Hero if searching to save space */}
      {!searchQuery && <Hero />}

      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => setSelectedArticle(article)}
              index={index}
            />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">
              No articles found matching "{searchQuery}"
            </p>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      <Footer />

      <AnimatePresence>
        {selectedArticle && (
          <ArticleView
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { X, Clock, Calendar, Share2, Facebook, Twitter, Linkedin, CheckCircle, Loader2, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Article } from '../data/articles';

interface ArticleViewProps {
  article: Article;
  onClose: () => void;
}

export default function ArticleView({ article, onClose }: ArticleViewProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // --- EMAIL CONFIGURATION ---
  const SERVICE_ID = "service_74judcl";
  const TEMPLATE_ID = "template_okiul1g";
  const PUBLIC_KEY = "1d5ivwA8O6nvSNdh_";

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this article: ${article.title}`);
    
    let shareUrl = '';
    if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (platform === 'linkedin') shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleSendArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // --- PREPARE THE EMAIL DATA ---
    // These names (to_email, article_title) must match your EmailJS Template variables
    const templateParams = {
      to_email: email,             
      article_title: article.title,
      article_link: window.location.href, 
      article_excerpt: article.excerpt,
      reply_to: "no-reply@omniverse.com",
    };

    try {
      // --- SEND THE EMAIL ---
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error("FAILED...", error);
      setStatus('error');
      alert("Failed to send email. Check console for details.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
    >
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50">
        <motion.div 
          className="h-full bg-blue-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="max-w-4xl mx-auto bg-white min-h-screen shadow-2xl relative">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 md:right-8 p-2 bg-white/90 backdrop-blur rounded-full shadow-lg hover:bg-slate-100 transition-colors z-50 border border-slate-200"
        >
          <X className="w-6 h-6 text-slate-600" />
        </button>

        {/* HERO IMAGE */}
        <div className="h-[40vh] md:h-[50vh] relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-bold mb-4 inline-block">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center space-x-6 text-sm md:text-base text-slate-200">
              <div className="flex items-center">
                <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full mr-2 border-2 border-white" />
                {article.author.name}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 p-8">
          
          {/* MAIN CONTENT */}
          <article className="md:w-2/3 prose prose-lg prose-slate max-w-none">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-8">
               <div className="flex space-x-2">
                 <button onClick={() => handleShare('twitter')} className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded-full transition-colors"><Twitter className="w-5 h-5" /></button>
                 <button onClick={() => handleShare('facebook')} className="p-2 hover:bg-blue-50 hover:text-blue-700 rounded-full transition-colors"><Facebook className="w-5 h-5" /></button>
                 <button onClick={() => handleShare('linkedin')} className="p-2 hover:bg-blue-50 hover:text-blue-800 rounded-full transition-colors"><Linkedin className="w-5 h-5" /></button>
                 <button className="p-2 hover:bg-slate-100 rounded-full transition-colors ml-4"><Share2 className="w-5 h-5" /></button>
               </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: article.content }} />
            
            <div className="bg-slate-50 p-6 rounded-xl mt-12 border-l-4 border-blue-600">
                <h3 className="font-bold text-slate-900 mb-2">Key Takeaways</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>This summary is dynamically generated.</li>
                    <li>The topic covered is crucial for {article.category} enthusiasts.</li>
                    <li>Always verify sources before making decisions.</li>
                </ul>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="md:w-1/3 space-y-8">
            
            {/* EMAIL THIS ARTICLE WIDGET */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">Save this for later?</h3>
              <p className="text-slate-300 mb-4 text-sm">Enter your email and we'll send this full article to your inbox instantly.</p>
              
              {status === 'success' ? (
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-green-500/20 text-green-400 p-6 rounded-xl text-center border border-green-500/50 flex flex-col items-center gap-3"
                >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-slate-900">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Sent!</h4>
                        <p className="text-sm text-green-200 mt-1">Check your inbox now.</p>
                    </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSendArticle} className="space-y-3 relative">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none text-white placeholder:text-slate-500 transition-all"
                    />
                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Email Me This Article
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                    {status === 'error' && <p className="text-red-400 text-sm text-center">Error sending. Try again.</p>}
                </form>
              )}
            </div>

            {/* Trending Widget */}
            <div className="border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Trending Now
              </h3>
              <ul className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <li key={i} className="group cursor-pointer">
                    <span className="text-xs text-slate-400 font-bold">0{i + 1}</span>
                    <h4 className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                        The Rise of AI Agents in 2025: A Complete Guide
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
            
             {/* Ad Space */}
            <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl h-64 flex items-center justify-center text-slate-400 font-bold">
                [AdSpace: Google Ads / Affiliate]
            </div>
          </aside>

        </div>
      </div>
    </motion.div>
  );
}
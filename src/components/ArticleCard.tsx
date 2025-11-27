import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
  index: number;
}

const categoryColors = {
  Tech: 'bg-blue-100 text-blue-700 border-blue-200',
  Finance: 'bg-green-100 text-green-700 border-green-200',
  Lifestyle: 'bg-purple-100 text-purple-700 border-purple-200',
  Anime: 'bg-pink-100 text-pink-700 border-pink-200',
  News: 'bg-orange-100 text-orange-700 border-orange-200',
};

export default function ArticleCard({ article, onClick, index }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200"
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              categoryColors[article.category]
            } backdrop-blur-sm`}
          >
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
          {article.title}
        </h3>

        <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">{article.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">{article.author.name}</p>
            </div>
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-blue-600 font-medium text-sm"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

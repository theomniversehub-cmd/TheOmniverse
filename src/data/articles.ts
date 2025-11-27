export interface Article {
  id: string;
  title: string;
  category: 'Tech' | 'Finance' | 'Lifestyle' | 'Anime' | 'News' | 'Gaming';
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
}

export const articles: Article[] = [
  // ==================== 
  // 📰 TODAY'S HEADLINES (NOV 26, 2025)
  // ====================
  {
    id: 'news-1',
    title: 'BREAKING: Global AI Safety Accord Signed by 40 Nations',
    category: 'News',
    excerpt: 'In a historic summit today, world leaders and tech giants agreed on the "Red Line" protocols for autonomous AI agents.',
    content: `
      <p><strong>Nov 26, 2025</strong> — The Geneva AI Summit has concluded with a landmark agreement that defines strict safety boundaries for "Frontier Models" like GPT-5 and Claude Opus.</p>
      
      <h2>The "Red Line" Protocols</h2>
      <p>For the first time, companies will be legally required to prove their models cannot self-replicate or execute cyberattacks before public release. This move comes just days after the release of Claude Opus 4.5 raised questions about autonomous coding capabilities.</p>
      
      <h2>What This Means for Open Source</h2>
      <p>Critics argue this could stifle open-source innovation (like Llama 4), while proponents say it is the only way to prevent an intelligence explosion. The treaty goes into effect on Jan 1, 2026.</p>
    `,
    author: {
      name: 'James Anderson',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 26, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tech-news-2',
    title: 'Samsung Announces Solid-State Battery for S26 Series',
    category: 'Tech',
    excerpt: 'The battery revolution is finally here. Samsung confirms the Galaxy S26 will feature a 6000mAh solid-state battery that charges in 9 minutes.',
    content: `
      <p>Smartphone battery stagnancy is over. Samsung's press release this morning confirmed that the S26 Ultra will be the first mass-market device to use Solid-State technology.</p>
      <h2>Why It Matters</h2>
      <ul>
        <li><strong>Safety:</strong> Non-flammable, meaning zero risk of explosion.</li>
        <li><strong>Density:</strong> 40% more capacity in the same physical size.</li>
        <li><strong>Speed:</strong> 0% to 100% charging in under 9 minutes.</li>
      </ul>
      <p>Apple is rumored to follow suit with the iPhone 18 later next year.</p>
    `,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 26, 2025',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
  },

  // ==================== 
  // 🤖 AI & PRODUCTIVITY (Your Original Requests)
  // ====================
  {
    id: 'ai-1',
    title: 'Best AI Tools Every Student Should Use in 2025',
    category: 'Tech',
    excerpt: 'Study smarter, not harder. From citing sources to solving calculus, these 5 tools are essential for the modern campus.',
    content: `
      <p>AI isn't just for cheating on essays. Used correctly, it is the ultimate personal tutor. Here is the toolkit every student needs in 2025.</p>
      
      <h2>1. Perplexity Pro (Research)</h2>
      <p>Forget Google. Perplexity gives you cited answers. It’s perfect for finding sources for papers without hallucinating facts.</p>
      
      <h2>2. Gamma (Presentations)</h2>
      <p>Type a topic, get a 10-slide deck in 30 seconds. It handles the formatting so you can focus on the speech.</p>
      
      <h2>3. Otter.ai (Notes)</h2>
      <p>Record your lectures. Otter transcribes them and summarizes the key points automatically.</p>
    `,
    author: {
      name: 'Dr. Aris Thorne',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 25, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ai-2',
    title: 'How AI Assistants Are Becoming Personal Life Managers',
    category: 'Lifestyle',
    excerpt: 'The new "Agentic" update to Gemini and Claude means your AI can now book flights, answer emails, and negotiate bills for you.',
    content: `
      <p>We used to chat with AI. Now, AI does the work for us. The shift to "Agentic AI" is the biggest trend of late 2025.</p>
      <h2>What Can They Do Now?</h2>
      <ul>
        <li><strong>Calendar Management:</strong> "Find a time when both John and I are free and book a meeting."</li>
        <li><strong>Shopping:</strong> "Order the ingredients for this recipe within a $50 budget."</li>
        <li><strong>Travel:</strong> "Plan a weekend in Tokyo and book the hotels."</li>
      </ul>
    `,
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 24, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
  },

  // ==================== 
  // 💻 CODING TOPICS (Your Original Requests)
  // ====================
  {
    id: 'code-1',
    title: 'Beginner-Friendly Python Projects You Can Finish in One Day',
    category: 'Tech',
    excerpt: 'Stop watching tutorials. Start building. Here are 3 projects that teach you loops, APIs, and GUIs.',
    content: `
      <p>The tutorial hell is real. Break out of it by building these three projects today.</p>
      
      <h2>1. The Weather Dashboard (API)</h2>
      <p>Use the OpenWeatherMap API to fetch real-time data. <strong>Key concept:</strong> JSON parsing and HTTP requests.</p>
      
      <h2>2. The Expense Tracker (Data)</h2>
      <p>A simple CLI tool to log your spending into a CSV file. <strong>Key concept:</strong> File I/O and data manipulation.</p>
      
      <h2>3. The Pomodoro Timer (GUI)</h2>
      <p>Use Tkinter or PyQt to build a study timer. <strong>Key concept:</strong> Event loops and UI logic.</p>
    `,
    author: {
      name: 'Dev Singh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 23, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'code-2',
    title: '10 Beginner Web Projects That Look Advanced',
    category: 'Tech',
    excerpt: 'Impress recruiters with these HTML/CSS/JS projects that look stunning but are surprisingly easy to code.',
    content: `
      <p>You don't need React for everything. Vanilla JS is powerful in 2025.</p>
      <h2>The Projects</h2>
      <ol>
        <li><strong>Parallax Landing Page:</strong> Pure CSS magic.</li>
        <li><strong>Glassmorphism Calculator:</strong> Modern UI design practice.</li>
        <li><strong>Movie Search App:</strong> Connect to the TMDB API.</li>
        <li><strong>Memory Card Game:</strong> Great for learning DOM manipulation.</li>
      </ol>
    `,
    author: {
      name: 'Dev Singh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 21, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
  },

  // ==================== 
  // 🎮 GAMING TOPICS (Your Original Requests)
  // ====================
  {
    id: 'game-1',
    title: 'Best Settings to Boost FPS on Low-End PCs (2025 Guide)',
    category: 'Gaming',
    excerpt: 'Struggling to run the latest titles? Turn off these three settings to double your frame rate immediately.',
    content: `
      <p>You don't need an RTX 5090 to enjoy gaming. Most lag comes from unoptimized settings.</p>
      <h2>1. Volumetric Fog</h2>
      <p>This is the FPS killer. Turn it to LOW immediately. You won't notice the difference visually, but your GPU will thank you.</p>
      <h2>2. Shadows & Ambient Occlusion</h2>
      <p>Drop shadows to Medium. High-quality shadows are expensive to render.</p>
      <h2>3. DLSS / FSR 4.0</h2>
      <p>If your card supports it, turn on "Performance" mode. AI upscaling is magic for low-end hardware.</p>
    `,
    author: {
      name: 'Kenji Tanaka',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 24, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'game-2',
    title: 'Mobile Gaming Esports: Why It Is Exploding Faster Than PC',
    category: 'Gaming',
    excerpt: 'With the release of Warzone Mobile and Valorant Mobile, the competitive scene has shifted to the phone in your pocket.',
    content: `
      <p>In 2025, the biggest prize pools aren't in CS2 or League of Legends. They are in Mobile Legends and PUBG Mobile.</p>
      <h2>Accessibility is King</h2>
      <p>Everyone has a phone. Not everyone has a $2000 PC. This accessibility has unlocked the massive markets of India, Brazil, and SE Asia.</p>
    `,
    author: {
      name: 'Kenji Tanaka',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 22, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1593305841991-05c29736f87e?auto=format&fit=crop&w=800&q=80',
  },

  // ==================== 
  // 🎒 STUDENT & LIFESTYLE (Your Original Requests)
  // ====================
  {
    id: 'study-1',
    title: 'The New Study Formula: Learn Twice as Fast in 2025',
    category: 'Lifestyle',
    excerpt: 'Active Recall + Spaced Repetition is the old news. The new method involves "Interleaved Practice."',
    content: `
      <p>Stop highlighting your textbook. It is passive and useless. Here is the science-backed formula for retention.</p>
      <h2>The Protocol</h2>
      <ol>
        <li><strong>Prime (5 mins):</strong> Skim the chapter headers before reading.</li>
        <li><strong>Interleave:</strong> Don't study one subject for 4 hours. Mix Math, History, and Biology in 30-minute blocks. This forces your brain to constantly "reload" context.</li>
        <li><strong>Blurting:</strong> Read a page, close the book, and write down everything you remember.</li>
      </ol>
    `,
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 20, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tech-budget',
    title: 'Why 2025 Is the Year of Ultra-Affordable Smart Devices',
    category: 'Tech',
    excerpt: 'Flagship features are trickling down. You can now get 120Hz screens and 50MP cameras for under $200.',
    content: `
      <p>The gap between a $1000 phone and a $300 phone has never been smaller.</p>
      <h2>Top Picks Under $300</h2>
      <ul>
        <li><strong>Nothing Phone 3a:</strong> Best design and clean software.</li>
        <li><strong>Pixel 9a:</strong> Flagship camera processing for a budget price.</li>
        <li><strong>Redmi Note 15 Pro:</strong> 200MP camera and 120W charging.</li>
      </ul>
    `,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 23, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
  },

  // ==================== 
  // 🍿 ENTERTAINMENT & FINANCE (Fillers for Variety)
  // ====================
  {
    id: 'anime-1',
    title: 'One Piece vs Attack on Titan: Which is the GOAT?',
    category: 'Anime',
    excerpt: 'A deep dive into storytelling, world-building, and cultural impact of the two giants of modern anime.',
    content: `One Piece offers unparalleled adventure and world-building spanning decades. AoT offers tight, political thriller narratives...`,
    author: {
      name: 'Yuki Tanaka',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 24, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'finance-1',
    title: 'Affiliate Marketing 101: How to Make Your First $1000',
    category: 'Finance',
    excerpt: 'You do not need a product. You just need an audience. Here is the blueprint for 2025.',
    content: `Start by choosing a niche. Don't try to sell everything. Focus on software, or fitness equipment...`,
    author: {
      name: 'Marcus Williams',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
    date: 'Nov 23, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
  }
];
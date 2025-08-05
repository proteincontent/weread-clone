import React from 'react';
import { Search, BookOpen } from 'lucide-react';
import BookCard from '@/components/BookCard';

// 模拟的书籍数据
const books = [
  {
    id: 1,
    title: '我胆小如鼠 (看完从胆小怯懦到...',
    author: '余华',
    cover: 'https://iili.io/F6rfzBV.png',
  },
  {
    id: 2,
    title: '明朝那些事儿 (全集)',
    author: '当年明月',
    cover: 'https://iili.io/F6rfzBV.png',
  },
  {
    id: 3,
    title: '被讨厌的勇气："自我启发之父"...',
    author: '岸见一郎 古贺史健',
    cover: 'https://iili.io/F6rfzBV.png',
  },
  {
    id: 4,
    title: '王阳明心学全书',
    author: '罗智',
    cover: 'https://iili.io/F6rfzBV.png',
  },
];

// 头部组件
const Header = () => {
  const navItems = ['最新热榜', '万古江河', '在虫子、字母和词...', '许倬云作品集', '经管特惠'];
  return (
    <header className="bg-white border-b border-gray-200 py-6">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <BookOpen className="text-blue-500 h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold text-gray-700">微信读书</h1>
        </div>
        
        {/* 搜索栏 */}
        <div className="max-w-xl mx-auto relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="搜索"
            className="w-full bg-gray-100 border border-gray-200 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
          />
        </div>
        
        {/* 导航链接 */}
        <nav className="flex justify-center items-center space-x-4 md:space-x-6 text-sm text-gray-500">
          {navItems.map(item => (
            <a key={item} href="#" className="hover:text-blue-500 transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

// 主应用组件
export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8 max-w-5xl">
        {/* 内容区域头部 */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">大家都在看</h2>
          <div>
            <a href="#" className="text-sm text-blue-500 hover:underline mr-4">传书到手机</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">登录</a>
          </div>
        </div>
        
        {/* 书籍网格 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
}
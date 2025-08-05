'use client';

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out p-4 flex flex-col items-center text-center transform-gpu hover:scale-110">
      <img 
        src={book.cover} 
        alt={`封面: ${book.title}`}
        className="w-32 h-48 object-cover rounded-md mb-4"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src='https://placehold.co/150x220/CCCCCC/FFFFFF?text=图片加载失败'; 
        }}
      />
      <h3 className="font-semibold text-gray-800 text-sm mb-1">{book.title}</h3>
      <p className="text-xs text-gray-500 mb-2">{book.author}</p>
      <p className="text-xs text-gray-400">大家都在读</p>
    </div>
  );
}
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BookCard from './BookCard';

// Define the Book interface for the story
interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
}

// Mock book data
const mockBook: Book = {
  id: 1,
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  cover: 'https://placehold.co/150x220/4F46E5/FFFFFF?text=Book+Cover'
};

const meta: Meta<typeof BookCard> = {
  title: 'Components/BookCard',
  component: BookCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    book: {
      control: 'object',
      description: 'Book object containing id, title, author, and cover'
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with standard book data
export const Default: Story = {
  args: {
    book: mockBook,
  },
};

// Story with a long title
export const LongTitle: Story = {
  args: {
    book: {
      ...mockBook,
      title: 'The Extremely Long and Complicated Book Title That Might Challenge the Layout Design'
    },
  },
};

// Story with a long author name
export const LongAuthorName: Story = {
  args: {
    book: {
      ...mockBook,
      author: 'Dr. Alexander von Humboldt-Friedrich Wilhelm Heinrich Alexander'
    },
  },
};

// Story with a missing cover image
export const MissingCover: Story = {
  args: {
    book: {
      ...mockBook,
      cover: 'invalid-image-url.jpg'
    },
  },
};
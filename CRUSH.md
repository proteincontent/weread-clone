# CRUSH Development Guidelines

## 🚀 Core Commands
```bash
# Development
npm run dev          # Start development server with file watching
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database (Prisma)
npm run db:push      # Push schema changes to database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Create and run migrations
npm run db:reset     # Reset database

# Note: No test framework currently configured
```

## 🎨 Code Style Guidelines

### Imports
- Use absolute imports with `@/*` alias (e.g., `@/components/ui/button`)
- Import React as default import when using JSX
- Group imports: Built-ins, External, Internal, Type-only imports at bottom
- Use named imports for components and utilities

### Formatting
- Follow Prettier defaults (configured via Tailwind)
- Use 2-space indentation
- No semicolons
- Single quotes for strings
- Trailing commas in objects and arrays

### Types
- Use TypeScript for all files
- Prefer interfaces over types for object shapes
- Use `type` for union/intersection types
- Leverage Zod for runtime validation

### Naming Conventions
- PascalCase for components and interfaces
- camelCase for variables, functions, and props
- UPPER_SNAKE_CASE for constants
- Descriptive variable names over abbreviations

### Error Handling
- Use try/catch for async operations
- Prefer early returns over nested if/else
- Handle errors at the appropriate level (component vs. utility)

### Component Structure
- Use functional components with arrow function syntax
- Place props interface directly above component
- Use clsx/tailwind-merge for dynamic class names
- Extract complex logic into custom hooks

### Database (Prisma)
- Use Prisma Schema for type-safe database operations
- Leverage Prisma Client for queries
- Use migrations for schema changes

## 📁 Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Shared components
- `src/components/ui/` - shadcn/ui components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and configurations
- `prisma/` - Prisma schema and migrations

## 🤖 AI Assistant Notes
- This codebase is optimized for AI-assisted development
- Components follow shadcn/ui patterns
- Prefer composition over complex props
- Use existing utility functions when available
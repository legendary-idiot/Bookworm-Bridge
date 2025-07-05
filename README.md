# 📚 Bookworm Bridge - Library Management System

A modern, responsive library management system built with React, TypeScript, and Redux Toolkit. Bookworm Bridge provides an intuitive interface for managing books, tracking borrowings, and maintaining a comprehensive library catalog.

![Bookworm Bridge](https://img.shields.io/badge/Bookworm-Bridge-ffd700?style=for-the-badge&logo=book&logoColor=black)
![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646cff?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-06b6d4?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 📖 Book Management

- **View All Books**: Browse the complete library catalog with beautiful card layouts
- **Add New Books**: Create new book entries with comprehensive details
- **Update Books**: Modify existing book information seamlessly
- **Delete Books**: Remove books from the library with confirmation dialogs
- **Book Details**: View detailed information for each book

### 🔄 Borrowing System

- **Borrow Books**: Check out books with quantity and due date selection
- **Borrow Summary**: Track all borrowed books and their status
- **Availability Tracking**: Real-time availability status for each book
- **Copy Management**: Track multiple copies of the same book

### 🎨 User Experience

- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Loading States**: Elegant loading spinners and error handling
- **Form Validation**: Comprehensive form validation with Zod schemas

### 🛠 Technical Features

- **TypeScript**: Full type safety throughout the application
- **Redux Toolkit**: State management with RTK Query for API calls
- **React Router**: Client-side routing with nested routes
- **Form Handling**: React Hook Form with validation
- **UI Components**: Reusable components with Radix UI primitives

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build

# Build
npm run build        # Build for production

# Linting
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer/         # Footer component
│   ├── Header/         # Navigation and header
│   ├── Theme/          # Theme provider and toggler
│   ├── ui/             # Base UI components (buttons, forms, etc.)
│   └── Utilities/      # Utility components (BookCard, modals, etc.)
├── interface/          # TypeScript interfaces
├── lib/               # Utility functions
├── Pages/             # Page components
├── redux/             # Redux store and API slices
├── Routes/            # Routing configuration
└── assets/            # Static assets (images, animations)
```

## 🎯 Key Components

### Book Management

- **BookCard**: Displays book information with actions (view, borrow, update, delete)
- **AddBookForm**: Form for creating new books
- **UpdateBookForm**: Form for editing existing books
- **BorrowBookModal**: Modal for borrowing books with quantity and due date

### Navigation & Layout

- **Navigation**: Responsive navigation with mobile menu
- **ThemeProvider**: Context provider for theme management
- **ThemeToggler**: Button to switch between light/dark themes

### State Management

- **booksApi**: RTK Query slice for book-related API calls
- **borrowBookApi**: API slice for borrowing functionality
- **store**: Redux store configuration

## 🎨 Design System

### Color Scheme

- **Primary**: Blue tones for primary actions
- **Success**: Green for available books and successful actions
- **Error**: Red for unavailable books and error states
- **Warning**: Yellow for confirmations and warnings

### Typography

- Clean, readable fonts with proper hierarchy
- Responsive text sizing
- Consistent spacing and line heights

### Components

- **Cards**: Clean book display cards with hover effects
- **Buttons**: Consistent button styling with loading states
- **Forms**: Accessible forms with proper validation
- **Modals**: Overlay modals for focused interactions

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Mobile-first design with collapsible navigation

## 🔧 Technology Stack

### Frontend

- **React 19.1.0**: Modern React with latest features
- **TypeScript 5.8.3**: Type-safe development
- **Vite 7.0.0**: Fast build tool and dev server
- **Tailwind CSS 4.1.11**: Utility-first CSS framework

### State Management

- **Redux Toolkit 2.8.2**: Modern Redux with RTK Query
- **React Redux 9.2.0**: React bindings for Redux

### Routing

- **React Router 7.6.3**: Client-side routing

### Forms & Validation

- **React Hook Form 7.59.0**: Performant forms
- **Zod 3.25.71**: Schema validation
- **@hookform/resolvers 5.1.1**: Form validation resolvers

### UI Components

- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icons
- **DaisyUI**: Component library for Tailwind CSS
- **SweetAlert2**: Beautiful alert dialogs

### Development Tools

- **ESLint**: Code linting
- **TypeScript ESLint**: TypeScript-specific linting rules

## 🌟 Features in Detail

### Book Catalog

- Display books in a responsive grid layout
- Filter by availability status
- Search and sort functionality
- Detailed book information cards

### Book Operations

- **Create**: Add new books with validation
- **Read**: View book details and availability
- **Update**: Edit book information
- **Delete**: Remove books with confirmation

### Borrowing System

- Select quantity and due date
- Real-time availability checking
- Borrowing history tracking
- Return date management

### Theme System

- Light and dark theme support
- System preference detection
- Persistent theme selection
- Smooth theme transitions

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Vercel Deployment

The project includes a `vercel.json` configuration for easy deployment on Vercel.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team**: For the amazing React framework
- **Vite Team**: For the fast build tool
- **Tailwind CSS**: For the utility-first CSS framework
- **Radix UI**: For accessible component primitives
- **Redux Toolkit**: For simplified Redux development

---

<div align="center">
  <p>Made with ❤️ for book lovers everywhere</p>
  <p>📚 Happy reading! 📚</p>
</div>

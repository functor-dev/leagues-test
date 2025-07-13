# Leagues Management App

A responsive Next.js application for managing fantasy sports leagues with drag-and-drop functionality to organize and archive leagues.

## Features

- **League Management**: View and organize multiple fantasy sports leagues
- **Drag & Drop**: Reorder leagues and archive them with intuitive drag-and-drop interface
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean interface with custom typography and components
- **Archive System**: Move leagues to archived section for better organization

## Tech Stack

- **Next.js**: v15.3.0 (React framework with App Router)
- **React**: v19.0.0
- **TypeScript**: v5 (Type safety)
- **Tailwind CSS**: v4 (Styling)
- **DND Kit**: v6.3.1 (Drag and drop functionality)
- **Node.js**: v20.11

## Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
│   ├── Badge/          # Status badges
│   ├── Button/         # Button component
│   ├── Icons/          # SVG icon components
│   ├── Nav/            # Navigation components
│   └── Typographies/   # Text components (Heading, Body, Label)
├── modules/            # Feature modules
│   └── Leagues/        # Main leagues functionality
│       └── atomics/    # League-specific components
└── types/              # TypeScript type definitions
```

## Getting Started

### Prerequisites

- **Node.js**: 20.11 or higher
- **Yarn**: Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd leagues
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Usage

1. **View Leagues**: All active leagues are displayed in the main section
2. **Reorder Leagues**: Drag and drop leagues to reorder them
3. **Archive Leagues**: Drag leagues to the "Archived" section to archive them
4. **Connect New League**: Use the "Connect League" button to add new leagues

## Architecture

- **Component-based**: Modular React components with TypeScript
- **Atomic Design**: Components organized by atomic design principles
- **Custom Hooks**: `useMediaMatch` for responsive behavior
- **State Management**: React hooks for local state management
- **Type Safety**: Full TypeScript coverage with defined interfaces

## Styling

- **Tailwind CSS v4**: Utility-first CSS framework
- **Custom Fonts**: Tactic Sans and Volks Ans Test fonts
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Dark color scheme optimized for modern interfaces

## Future Improvements

- **Undo Functionality**: Add undo notification after drag-and-drop actions
- **API Integration**: Connect to real fantasy sports APIs
- **User Authentication**: Add user accounts and personalized leagues
- **League Details**: Expanded league information and statistics
- **Search & Filter**: Add search and filtering capabilities
- **Real-time Updates**: Live updates for league status changes
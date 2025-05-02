
import { ReactNode } from 'react';
import BottomNavigation from './BottomNavigation';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-zoo-background">
      {title && (
        <header className="sticky top-0 z-10 bg-white shadow-sm p-4">
          <h1 className="text-xl font-bold">{title}</h1>
        </header>
      )}
      <main className="flex-grow p-4 pb-20 overflow-auto">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;

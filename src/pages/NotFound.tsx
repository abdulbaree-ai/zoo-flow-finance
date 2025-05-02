
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zoo-background p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! The page you're looking for has escaped.</p>
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1546182990-dffeafbe841d" 
            alt="Animal escaped" 
            className="max-w-xs mx-auto rounded-lg opacity-75"
          />
        </div>
        <Link to="/">
          <Button className="bg-zoo-purple hover:bg-zoo-purple/90">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

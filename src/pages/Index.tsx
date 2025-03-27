
import { useAuth } from "../contexts/AuthContext";

const Index = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Debt Dynamo Dashboard</h1>
        <p className="text-xl text-gray-600 mb-4">You are automatically signed in!</p>
        
        <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">User Information</h2>
          <p className="text-gray-700">ID: {user?.id || 'Loading...'}</p>
          <p className="text-gray-700">Name: {user?.name || 'Loading...'}</p>
          <p className="text-gray-700">Status: {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p>
        </div>
        
        <p className="mt-6 text-gray-500 text-sm">Your data is automatically saved across sessions.</p>
      </div>
    </div>
  );
};

export default Index;

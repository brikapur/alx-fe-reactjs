import { useState } from 'react'
import Search from './components/Search';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-blue-600">
          GitHub User Search
        </h1>
      </header>

      <main>
        {/* Search component will go here */}
      </main>
      <Search />
    </div>
      );
      }
      
      export default App;

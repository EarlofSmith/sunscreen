import React from 'react';
import { useQuery } from '@apollo/client';



const Home = () => {
  const { loading, data } = useQuery();


  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <a>add your content</a>
        
        </div>
      </div>
    </main>
  );
};

export default Home;

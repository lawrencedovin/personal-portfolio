import React from 'react';
import Hero from '../../Hero/Hero';
import Preview from '../../Preview/Preview';


function Home () {
  return(
    <div data-testid="Home">
      <Hero />
      <Preview />
    </div>
  );
}
export default Home;

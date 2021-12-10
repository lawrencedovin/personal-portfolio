import React from 'react';
import Hero from '../../Hero/Hero';
import Preview from '../../Preview/Preview';
import ContactForm from '../../ContactForm/ContactForm';


function Home () {
  return(
    <div data-testid="Home">
      <Hero />
      <Preview />
      <ContactForm />
    </div>
  );
}
export default Home;

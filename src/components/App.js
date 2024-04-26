import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import data from '../data/blog';

function App () {
  return (
    <div className='App'>
      <Header name="My Blog" />
      <About image="https://example.com/image.jpg" about="This is my blog." />
      <ArticleList posts={data.posts} />
    </div>
  );
};

export default App;
import React from 'react';

function Article({ title, date = "January 1, 1970", preview }) {
  const minutesToRead = Math.ceil(preview.split(' ').length / 200);
  const coffeeCups = Math.ceil(minutesToRead / 5);
  const bentoBoxes = Math.ceil(minutesToRead / 10);

  const renderReadingTime = () => {
    if (minutesToRead < 30) {
      return '☕️'.repeat(coffeeCups) + ` ${minutesToRead} min read`;
    } else {
      return '🍱'.repeat(bentoBoxes) + ` ${minutesToRead} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{renderReadingTime()}</small>
    </article>
  );
}

export default Article;

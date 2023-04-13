import React, { useEffect, useState } from 'react';
import './styles/index.css';

const Likes = ({ likes }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(true);
    const intervalId = setTimeout(() => {
      setIsClicked(false);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [likes]);

  return (
    <div className='likes'>
      {likes >= 0 ? (
        <p className='like-count'>
          <i
            className={
              !isClicked ? `fa-solid fa-heart` : `fa-solid fa-heart fa-bounce`
            }
            style={{ color: '#ff0000' }}
          />
          {likes}
        </p>
      ) : (
        <p className='like-count'>
          <i
            className={
              !isClicked
                ? `fa-solid fa-heart-crack`
                : `fa-solid fa-heart-crack fa-bounce`
            }
            style={{ color: '#ff0000' }}
          />
          {likes}
        </p>
      )}
    </div>
  );
};

export default Likes;

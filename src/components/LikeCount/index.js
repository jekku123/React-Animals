import React, { useEffect, useRef, useState } from 'react';

const LikeCount = ({ likes }) => {
  const [isClicked, setIsClicked] = useState(false);

  const intervalId = useRef(0);

  useEffect(() => {
    setIsClicked(true);
    intervalId.current = setTimeout(() => {
      setIsClicked(false);
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
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

export default LikeCount;

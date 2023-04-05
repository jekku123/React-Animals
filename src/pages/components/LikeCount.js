import React, { useEffect, useRef, useState } from 'react';

const LikeCount = ({ animal }) => {
  const [isClicked, setIsClicked] = useState(false);

  const intervalId = useRef(0);

  useEffect(() => {
    clearInterval(intervalId.current);
    setIsClicked(true);
    intervalId.current = setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  }, [animal.likes]);

  return (
    <div className='likes'>
      {animal.likes >= 0 ? (
        <p className='like-count'>
          <i
            className={
              !isClicked ? `fa-solid fa-heart` : `fa-solid fa-heart fa-bounce`
            }
            style={{ color: '#ff0000' }}
          />
          {animal.likes}
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
          {animal.likes}
        </p>
      )}
    </div>
  );
};

export default LikeCount;

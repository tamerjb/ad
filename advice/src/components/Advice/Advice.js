import React, { useState, useEffect } from 'react';
import splitter from '../../images/pattern-divider-desktop.svg';
import button from '../../images/icon-dice.png';

const Advice = () => {
  const [advice, setAdvice] = useState('');
  useEffect(() => {
    // Fetch the advice when the component mounts
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      console.log(data.slip.advice);

      // Extract the advice from the response
      const { advice } = data.slip;

      setAdvice(advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };
  const handleButtonClick = () => {
    // When the button is clicked, fetch new advice
    fetchAdvice();
  };
  function getRandomRoundedNumber(min, max) {
    // Generate a random number between 0 and 1
    const random = Math.random();

    // Scale the random number to the desired range and round it down
    const randomNumber = Math.floor(random * (max - min + 1)) + min;

    return randomNumber;
  }

  // Get a random rounded number between 1 and 300
  const randomRoundedNumber = getRandomRoundedNumber(1, 300);

  console.log(randomRoundedNumber);

  return (
    <div className='advice__container'>
      <div className='advice__content'>
        <p className='advice__number'>ADVICE #{randomRoundedNumber}</p>
        <div className='advice__text__container'>
          <p className='advice__text__content'>"{advice}"</p>
          <img src={splitter} className='splitter' />
        </div>
        <div className='button'>
          <img
            onClick={handleButtonClick}
            src={button}
            className='button2'
            alt='test'
          />
        </div>
      </div>
    </div>
  );
};

export default Advice;

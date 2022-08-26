import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/actionsns/greetings';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);
  const greeting = greetings.length ? greetings[0][Math.floor(Math.random()*greetings[0].length)] : '';
  const dispatch = useDispatch();

  useEffect(() => {
    if (!greetings.length) {
      dispatch(getGreetings());
    }
  }, [greetings]);

  return (
    <div>
      <p>Below are the message:</p>
      {
        greeting ? (
          greeting.attributes.greeting
        ) : (
          <div>Loading...</div>
        )
      }
    </div>
  );
}

export default Greeting

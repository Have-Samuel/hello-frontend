const url = 'http://localhost:5173/api/v1/greetings';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchGreetings = () => getData(url);

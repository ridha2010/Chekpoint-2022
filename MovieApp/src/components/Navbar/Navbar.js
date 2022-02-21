import React from 'react';

const Navbar = ({ setName }) => {
  const handleInput = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="looking for a movie"
        onChange={handleInput}
      />
    </div>
  );
};

export default Navbar;

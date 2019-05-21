import React from 'react';

const TotalAnimals = (props) => {
  return(
    <>
      <h3>We currently have {props.animals.length} cats and dogs in the shelter.</h3>
    </>
  )
}

export default TotalAnimals;

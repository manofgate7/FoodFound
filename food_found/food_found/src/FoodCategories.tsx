import React, { useState } from "react";


const categories = [
    { title: 'American', id: 1 },
    { title: 'Italian', id: 2 },
    { title: 'French', id: 3 },
    { title: 'Mexican', id: 4 },
    { title: 'Chinese', id: 5 },
    { title: 'Tex-Mex', id: 6 },
    { title: 'meditraranian', id: 7 },
    { title: 'Indian', id: 8 },

  ];

  

  function RandomerButton() {
    const [id, setId] = useState(0);
    function handleRadnomClick() {
        const min = 1;
        const max = categories.length;
        const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setId(newRandomNumber);
      }

      let chooseString = "Chosen Food is " + categories[id-1]?.title;
    return (
        <>
           {
               id > 0 ? chooseString : null
           }
            
           <br/>
        <button onClick={handleRadnomClick}>
            Randomize
        </button>
        <br/>
      </>
    );
  }

  export default function CategoriesList() {
    
    const listItems = categories.map(category => 
        <li
      key={category.id}
    >
      {category.title}
    </li>
        );

    return (
        <div>
            <RandomerButton /> 

            Food Categories:
            <ul>{listItems}</ul>
        </div>
        );
  }
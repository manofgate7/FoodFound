import { title } from "process";
import React, { useState } from "react";


const initCategories = [
    { title: 'American', id: 1 },
    { title: 'Italian', id: 2 },
    { title: 'French', id: 3 },
    { title: 'Mexican', id: 4 },
    { title: 'Chinese', id: 5 },
    { title: 'Tex-Mex', id: 6 },
    { title: 'meditraranian', id: 7 },
    { title: 'Indian', id: 8 },

  ];



  export default function CategoriesList() {
    const [categories, setCategories] = useState(initCategories);
    const listItems = categories.map(category => 
        <li
      key={category.id}
    >
      {category.title}
      <CategoriesUpdate index={category.id} />
    </li>
        );

        function CategoriesAdd() {
      
            const [name, setName] = useState('');
            function handleAddClick() {
                let catLength =Math.max(...categories.map(o => o.id)) + 1;
                setCategories( // Replace the state
                    [ // with a new array
                      ...categories, // that contains all the old items
                      { title: name, id: catLength } // and one new item at the end
                    ]
                  );
            }
            return (
                <>
                    <input value={name}  onChange={e => setName(e.target.value)} />
                    <button onClick={handleAddClick}>
                        Add
                    </button>
                </>
            )
          }

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
        
          interface CatUpdateProps {
            index: number;
         }
          function CategoriesUpdate({index}: CatUpdateProps) {
            const [isUpdate , setIsUpdate] = useState(false);
            const [name, setName] = useState('');
        
              function handleUpdateClick(index: number) {
                const nextCategories = categories.map((c, i) => {

                    if (c.id === index) {
                        
                      // Increment the clicked counter
                      return {title: name, id: index};
                    } else {
                      // The rest haven't changed
                      return c;
                    }
                  });
                  
                  setCategories(nextCategories);
              }
              function handleDeleteClick(index: number) {
                setCategories( categories.filter(a =>
                    a.id !== index 
                  )
                )
              }
              return (
                  <>
                    
                    { 
                        isUpdate ? (
                            <span>
                                <input value={name}  onChange={e => setName(e.target.value)} />
                                <button onClick={() => setIsUpdate(false)}>
                                Cancel
                                </button>
                                <button onClick={() => handleUpdateClick(index)}>
                                Save
                                </button>
                             </span>
                        ) : (
                            <span>
                                <button onClick={() => setIsUpdate(true)}>
                                    Update
                                </button>
                                <button onClick={() => handleDeleteClick(index)}>
                                    Remove
                                </button>
                            </span>
                        )
                    }
                   
                  </>
              )
          }

    return (
        <div>
            <RandomerButton /> 

            Food Categories:
            <ul>{listItems}</ul>
            <CategoriesAdd />
        </div>
        );
  }

  
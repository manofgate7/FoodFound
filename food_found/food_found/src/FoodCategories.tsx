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

  export default function CategoriesList() {
    const listItems = categories.map(category => 
        <li
      key={category.id}
    >
      {category.title}
    </li>
        );

    return (
        <ul>{listItems}</ul>
        );
  }
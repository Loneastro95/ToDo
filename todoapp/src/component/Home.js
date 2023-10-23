
import React from 'react';



const Home = () => {
    const [list, setList] = React.useState(['task 1', 'task 2', 'task 3']);
    const [id, setId] = React.useState(0);
  
    const handleAddClick = () => {
      setId(id => id + '');
      setList(list => [...list, 'new task - ' + id]);
    };
  
    const handleClear = () => {
      setId(0);
      setList([]);
    };

  const [query, setQuery] = React.useState('');
    return (
      <div className='container'>

<form className="search"
        onChange={(event) => setQuery(event.target.value)}>
          <input
           type="text"
           name="search"
           required="reqired"
           placeholder="Search..."/>
        </form>
        		
        <div style={{ display: 'flex'}}>
          <button onClick={handleAddClick}>Add item</button>
          <button onClick={handleClear}>Clear list</button>
        </div>
        <div>
          {list.filter((List) =>
		 List.toLowerCase().includes(query)).
          map((item) => {
            const handleRemoveClick = () => {
              setList(list => list.filter((entry) => entry !== item));
            };
            return (
              <div key={item} >
                {item}
                <div/> {/* <-------------------- spacer element */}
                <button onClick={handleRemoveClick}>x</button>
              </div>
            );
          })}
        </div>

      </div>
    );
  };
  
  export default Home
<!--Navigation: 
 
Create a new component for the navigation bar. Let’s call it NavigationBar. 
Jsx -->
 
Import React from ‘react’; 
Import { Link } from ‘react-router-dom’; // Assuming you’re using React Router 
 
Const NavigationBar = ({ navbar }) => { 
  Return ( 
    <nav> 
      <ul> 
        {navbar.map(item => ( 
          <li key={item.id}> 
            <Link to={`/${item.id}`}>{item.name}</Link> 
            {item.child && ( 
              <ul> 
                {item.child.map(childItem => ( 
                  <li key={childItem.id}> 
                    <Link to={`/${childItem.id}`}>{childItem.name}</Link> 
                  </li> 
                ))} 
              </ul> 
            )} 
          </li> 
        ))} 
      </ul> 
    </nav> 
  ); 
}; 

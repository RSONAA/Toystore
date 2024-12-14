// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../css/AdminHomePage.css";
// import Shopbyage from './Shopbyage';
// import Shopbybrand from './Shopbybrand';
// import Shopbychar from './Shopbychar';
// import Outdoor from './Outdoor';

// const AdminPage = () => {
//   const [activeSection, setActiveSection] = useState('age');
//   const navigate = useNavigate();

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   const handleAddNewItem = () => {
//     navigate('/admin/add-item');
//   };

//   const renderActiveSection = () => {
//     switch (activeSection) {
//       case 'age':
//         return <Shopbyage />;
//       case 'brand':
//         return <Shopbybrand />;
//       case 'character':
//         return <Shopbychar />;
//       case 'outdoor':
//         return <Outdoor />;
//       default:
//         return <Shopbyage />;
//     }
//   };

//   return (
//     <div className="admin-page">
//       <div className="admin-nav">
//         <h1>Admin Panel</h1>
//         <button onClick={() => handleSectionChange('age')}>By Age</button>
//         <button onClick={() => handleSectionChange('brand')}>By Brand</button>
//         <button onClick={() => handleSectionChange('character')}>By Character</button>
//         <button onClick={() => handleSectionChange('outdoor')}>Outdoor Games</button>
//         <button className="add-item-button" onClick={handleAddNewItem}>
//           Add New Item
//         </button>
//       </div>
//       <div className="admin-content">
//         {renderActiveSection()}
//       </div>
//     </div>
//   );
// };

// export default AdminPage;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "../css/AdminHomePage.css";
// import Shopbyage from './Shopbyage';
// import Shopbybrand from './Shopbybrand';
// import Shopbychar from './Shopbychar';
// import Outdoor from './Outdoor';

// const AdminPage = () => {
//   const [activeSection, setActiveSection] = useState('age');
//   const [items, setItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchItems();
//   }, [activeSection]);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/items/all`);
//       setItems(response.data);
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     }
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   const handleAddNewItem = () => {
//     navigate('/admin/add-item');
//   };

//   const handleEditItem = (itemId) => {
//     navigate(`/admin/edit-item/${itemId}`);
//   };

//   const handleDeleteItem = async (itemId) => {
//     try {
//         let deleteEndpoint = '';
//         switch (activeSection) {
//             case 'age':
//                 deleteEndpoint = `http://localhost:8080/api/items/age/${itemId}`;
//                 break;
//             case 'brand':
//                 deleteEndpoint = `http://localhost:8080/api/items/brand/${itemId}`;
//                 break;
//             case 'character':
//                 deleteEndpoint = `http://localhost:8080/api/items/char/${itemId}`;
//                 break;
//             case 'outdoor':
//                 deleteEndpoint = `http://localhost:8080/api/items/outdoor/${itemId}`;
//                 break;
//             default:
//                 deleteEndpoint = `http://localhost:8080/api/items/${itemId}`;
//         }

//         await axios.delete(deleteEndpoint);
//         setItems(items.filter(item => item.id !== itemId));
//     } catch (error) {
//         console.error('Error deleting item:', error);
//     }
// };


//   const renderActiveSection = () => {
//     const props = {
//       onEditItem: handleEditItem,
//       onDeleteItem: handleDeleteItem,
//       items,
//     };

//     switch (activeSection) {
//       case 'age':
//         return <Shopbyage {...props} isAdmin />;
//       case 'brand':
//         return <Shopbybrand {...props} isAdmin />;
//       case 'character':
//         return <Shopbychar {...props} isAdmin />;
//       case 'outdoor':
//         return <Outdoor {...props} isAdmin />;
//       default:
//         return <Shopbyage {...props} isAdmin />;
//     }
//   };

//   return (
//     <div className="admin-page">
//       <div className="admin-nav">
//         <h1>Admin Panel</h1>
//         <button onClick={() => handleSectionChange('age')}>By Age</button>
//         <button onClick={() => handleSectionChange('brand')}>By Brand</button>
//         <button onClick={() => handleSectionChange('character')}>By Character</button>
//         <button onClick={() => handleSectionChange('outdoor')}>Outdoor Games</button>
//         <button className="add-item-button" onClick={handleAddNewItem}>
//           Add New Item
//         </button>
//       </div>
//       <div className="admin-content">
//         {renderActiveSection()}
//       </div>
//     </div>
//   );
// };

// export default AdminPage;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "../css/AdminHomePage.css";
// import Shopbyage from './Shopbyage';
// import Shopbybrand from './Shopbybrand';
// import Shopbychar from './Shopbychar';
// import Outdoor from './Outdoor';

// const AdminPage = () => {
//   const [activeSection, setActiveSection] = useState('age');
//   const [items, setItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchItems();
//   }, [activeSection]);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/items/${activeSection}`);
//       setItems(response.data);
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     }
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   const handleAddNewItem = () => {
//     navigate('/admin/add-item');
//   };

//   const handleEditItem = (itemId) => {
//     navigate(`/admin/edit-item/${itemId}`);
//   };

//   const handleDeleteItem = async (itemId) => {
//     try {
//       let deleteEndpoint = '';
//       switch (activeSection) {
//         case 'age':
//           deleteEndpoint = `http://localhost:8080/api/items/age/${itemId}`;
//           break;
//         case 'brand':
//           deleteEndpoint = `http://localhost:8080/api/items/brand/${itemId}`;
//           break;
//         case 'character':
//           deleteEndpoint = `http://localhost:8080/api/items/char/${itemId}`;
//           break;
//         case 'outdoor':
//           deleteEndpoint = `http://localhost:8080/api/items/outdoor/${itemId}`;
//           break;
//         default:
//           deleteEndpoint = `http://localhost:8080/api/items/${itemId}`;
//       }

//       await axios.delete(deleteEndpoint);
//       setItems(items.filter(item => item.id !== itemId));
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const renderActiveSection = () => {
//     const props = {
//       onEditItem: handleEditItem,
//       onDeleteItem: handleDeleteItem,
//       items,
//     };

//     switch (activeSection) {
//       case 'age':
//         return <Shopbyage {...props} isAdmin />;
//       case 'brand':
//         return <Shopbybrand {...props} isAdmin />;
//       case 'character':
//         return <Shopbychar {...props} isAdmin />;
//       case 'outdoor':
//         return <Outdoor {...props} isAdmin />;
//       default:
//         return <Shopbyage {...props} isAdmin />;
//     }
//   };

//   return (
//     <div className="admin-page">
//       <div className="admin-nav">
//         <h1>Admin Panel</h1>
//         <button onClick={() => handleSectionChange('age')}>By Age</button>
//         <button onClick={() => handleSectionChange('brand')}>By Brand</button>
//         <button onClick={() => handleSectionChange('character')}>By Character</button>
//         <button onClick={() => handleSectionChange('outdoor')}>Outdoor Games</button>
//         <button className="add-item-button" onClick={handleAddNewItem}>
//           Add New Item
//         </button>
//       </div>
//       <div className="admin-content">
//         {renderActiveSection()}
//       </div>
//     </div>
//   );
// };

// export default AdminPage;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "../css/AdminHomePage.css";
// import Shopbyage from './Shopbyage';
// import Shopbybrand from './Shopbybrand';
// import Shopbychar from './Shopbychar';
// import Outdoor from './Outdoor';

// const AdminPage = () => {
//   const [activeSection, setActiveSection] = useState('age');
//   const [items, setItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchItems();
//   }, [activeSection]);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/items/${activeSection}`);
//       setItems(response.data);
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     }
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   const handleAddNewItem = () => {
//     navigate('/admin/add-item');
//   };

//   const handleEditItem = (itemId) => {
//     navigate(`/admin/edit-item/${itemId}/${activeSection}`);
//   };
  

  
//   const handleDeleteItem = async (itemId) => {
//     try {
//       let deleteEndpoint = '';
//       switch (activeSection) {
//         case 'age':
//           deleteEndpoint = `http://localhost:8080/api/items/age/${itemId}`;
//           break;
//         case 'brand':
//           deleteEndpoint = `http://localhost:8080/api/items/brand/${itemId}`;
//           break;
//         case 'char':
//           deleteEndpoint = `http://localhost:8080/api/items/char/${itemId}`;
//           break;
//         case 'outdoor':
//           deleteEndpoint = `http://localhost:8080/api/items/outdoor/${itemId}`;
//           break;
//         default:
//           console.error('Unknown section');
//           return;
//       }
  
//       const response = await axios.delete(deleteEndpoint);
//       if (response.status === 204) {
//         // Item successfully deleted
//         fetchItems(); // Re-fetch items after deletion
//       } else {
//         console.error('Failed to delete item, status:', response.status);
//       }
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };
  
  

//   const renderActiveSection = () => {
//     const props = {
//       onEditItem: handleEditItem,
//       onDeleteItem: handleDeleteItem,
//       items,
//     };

//     switch (activeSection) {
//       case 'age':
//         return <Shopbyage {...props} isAdmin />;
//       case 'brand':
//         return <Shopbybrand {...props} isAdmin />;
//       case 'char':
//         return <Shopbychar {...props} isAdmin />;
//       case 'outdoor':
//         return <Outdoor {...props} isAdmin />;
//       default:
//         return <Shopbyage {...props} isAdmin />;
//     }
//   };

//   return (
//     <div className="admin-page">
//       <div className="admin-nav">
//         <h1>Admin Panel</h1>
//         <button onClick={() => handleSectionChange('age')}>By Age</button>
//         <button onClick={() => handleSectionChange('brand')}>By Brand</button>
//         <button onClick={() => handleSectionChange('char')}>By Character</button>
//         <button onClick={() => handleSectionChange('outdoor')}>Outdoor Games</button>
//         <button className="add-item-button" onClick={handleAddNewItem}>
//           Add New Item
//         </button>
//       </div>
//       <div className="admin-content">
//         {renderActiveSection()}
//       </div>
//     </div>
//   );
// };

// export default AdminPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/AdminHomePage.css";
import Shopbyage from './Shopbyage';
import Shopbybrand from './Shopbybrand';
import Shopbychar from './Shopbychar';
import Outdoor from './Outdoor';

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState('age');
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, [activeSection]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/items/${activeSection}`);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleAddNewItem = () => {
    navigate('/admin/add-item');
  };

  const handleEditItem = (itemId) => {
    navigate(`/admin/edit-item/${itemId}/${activeSection}`);
  };

  const handleDeleteItem = async (itemId) => {
    try {
      let deleteEndpoint = '';
      switch (activeSection) {
        case 'age':
          deleteEndpoint = `http://localhost:8080/api/items/age/${itemId}`;
          break;
        case 'brand':
          deleteEndpoint = `http://localhost:8080/api/items/brand/${itemId}`;
          break;
        case 'char':
          deleteEndpoint = `http://localhost:8080/api/items/char/${itemId}`;
          break;
        case 'outdoor':
          deleteEndpoint = `http://localhost:8080/api/items/outdoor/${itemId}`;
          break;
        default:
          console.error('Unknown section');
          return;
      }
  
      const response = await axios.delete(deleteEndpoint);
      if (response.status === 204) {
        fetchItems(); // Re-fetch items after deletion
      } else {
        console.error('Failed to delete item, status:', response.status);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleViewFeedback = () => {
    navigate('/admin/feedback'); // Add this to handle navigation to the feedback page
  };

  const renderActiveSection = () => {
    const props = {
      onEditItem: handleEditItem,
      onDeleteItem: handleDeleteItem,
      items,
    };

    switch (activeSection) {
      case 'age':
        return <Shopbyage {...props} isAdmin />;
      case 'brand':
        return <Shopbybrand {...props} isAdmin />;
      case 'char':
        return <Shopbychar {...props} isAdmin />;
      case 'outdoor':
        return <Outdoor {...props} isAdmin />;
      default:
        return <Shopbyage {...props} isAdmin />;
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-nav">
        <h1>Admin Panel</h1>
        <button onClick={() => handleSectionChange('age')}>By Age</button>
        <button onClick={() => handleSectionChange('brand')}>By Brand</button>
        <button onClick={() => handleSectionChange('char')}>By Character</button>
        <button onClick={() => handleSectionChange('outdoor')}>Outdoor Games</button>
        <button className="add-item-button" onClick={handleAddNewItem}>
          Add New Item
        </button>
        <button className="feedback-button" onClick={handleViewFeedback}>
          User Messages
        </button> {/* New button added here */}
      </div>
      <div className="admin-content">
        {renderActiveSection()}
      </div>
    </div>
  );
};

export default AdminPage;

import { Route, Routes } from 'react-router-dom';
import AddUser, { EditUsers } from './components/form';
import Home from './components/Home';
import ViewUsers from './components/table';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/viewusers" element={<ViewUsers />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/updateuser/:id" element={<EditUsers />} />
    </Routes>
  );
};


export default App;

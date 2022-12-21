import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as parksAPI from "../../utilities/parks-api";
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import ParkList from '../ParkList/ParkList';
import ParkDetail from '../ParkDetail/ParkDetail';
import Wishlist from '../Wishlist/Wishlist';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [parks, setParks] = useState([]);

  useEffect(() => {
    async function getParks() {
      const allParks = await parksAPI.index();
      setParks(allParks);
    }
    getParks();
  }, [])

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<ParkList parks={parks} />} />
              <Route path="/Park/:parkId" element={<ParkDetail parks={parks} />} />
              <Route path="/wishlist" element={<Wishlist parks={parks} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

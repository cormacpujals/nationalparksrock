import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ParkList from '../ParkList/ParkList';
import NavBar from '../../components/NavBar/NavBar';
import * as parksAPI from "../../utilities/parks-api";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [parks, setParks] = useState([]);
  console.log(parks);
  useEffect(() => {
    async function getParks() {
      const allParks = await parksAPI.index();
      setParks(allParks);
    }
    if (user) getParks();
  }, [])

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<ParkList parks={parks} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

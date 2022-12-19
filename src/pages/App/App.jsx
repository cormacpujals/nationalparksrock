import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ParkList from '../ParkList/ParkList';
import ParkDetail from '../ParkDetail/ParkDetail';
import NavBar from '../../components/NavBar/NavBar';
import * as parksAPI from "../../utilities/parks-api";

export default function App() {
  const [user, setUser] = useState(getUser());
  // const [parksAndPages, setParksAndPages] = useState({});
  const [parks, setParks] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const data = await parksAPI.index();
  //     setParksAndPages(data);
  //   }
  //   if (user) getData();
  // }, [])

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
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

// src/App.jsx
import React from "react";
import { ProfileProvider } from "./context/UserContext";
import ProfileCards from "./component/ProfileCards"
import AddProfileForm from "./component/AddProfileForm";

const App = () => {
  return (
    <ProfileProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-center text-3xl font-bold mb-6">Gestion des Profils</h1>
        <AddProfileForm />
        <ProfileCards />
      </div>
    </ProfileProvider>
  );
};

export default App;

// src/components/ProfileCards.jsx
import React, { useContext } from "react";
import { ProfileContext } from "../context/UserContext";

const ProfileCards = () => {
  const { profiles, deleteProfile, setSearchTerm } = useContext(ProfileContext);

  return (
    <div>
      {/* Barre de recherche */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[410px] p-2 border rounded mb-4"
        />
      </div>

      {/* Liste des profils */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
            <p className="text-gray-600">Email: {profile.email}</p>
            <p className="text-gray-600">Phone: {profile.phone}</p>
            <p className="text-gray-600">Website: {profile.website}</p>
            <button
              onClick={() => deleteProfile(profile.id)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCards;

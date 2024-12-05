import React, { createContext, useEffect, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Charger les profils depuis l'API
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Erreur de récupération des données :", error);
      }
    };
    fetchProfiles();
  }, []);

  // Ajouter un utilisateur
  const addProfile = (newProfile) =>
    setProfiles((prev) => [...prev, { id: prev.length + 1, ...newProfile }]);

  // Supprimer un utilisateur
  const deleteProfile = (id) =>
    setProfiles((e) => e.filter((profile) => profile.id !== id));

  // Filtrer les utilisateurs par nom
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProfileContext.Provider
      value={{ profiles: filteredProfiles, addProfile, deleteProfile, setSearchTerm }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

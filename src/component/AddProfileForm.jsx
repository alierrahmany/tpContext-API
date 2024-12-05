// src/components/AddProfileForm.jsx
import React, { useContext, useState } from "react";
import { ProfileContext } from "../context/UserContext";

const AddProfileForm = () => {
  const { addProfile } = useContext(ProfileContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile({ name, email, phone, website });
    setName("");
    setEmail("");
    setPhone("");
    setWebsite("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Ajouter un utilisateur</h2>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="text"
        placeholder="Téléphone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="block w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="text"
        placeholder="Site web"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="block w-full p-2 border rounded mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Ajouter
      </button>
    </form>
  );
};

export default AddProfileForm;

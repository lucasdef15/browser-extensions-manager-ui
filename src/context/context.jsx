import { createContext, useState, useEffect } from "react";

export const ExtensionContext = createContext(undefined);

export const ExtensionProvider = ({ children }) => {
  const [extensions, setExtensions] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setExtensions(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const handleToggle = (index) => {
    const updated = [...extensions];
    updated[index].isActive = !updated[index].isActive;
    setExtensions(updated);
  };

  const handleRemove = (index) => {
    const updated = extensions.filter((_, i) => i !== index);
    setExtensions(updated);
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true; // all
  });

  return (
    <ExtensionContext.Provider
      value={{
        extensions: filteredExtensions,
        handleToggle,
        setFilter,
        handleRemove,
        currentFilter: filter,
      }}
    >
      {children}
    </ExtensionContext.Provider>
  );
};

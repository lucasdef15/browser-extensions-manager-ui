import React, { useEffect, useState } from "react";

const ExtensionsList = () => {
  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setExtensions(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 w-[90%] bg-amber-400">
      {extensions.map((ext, index) => (
        <div
          key={index}
          className="flex-1 min-w-[300px] md:max-w-[350px] max-w-[100%]  bg-white p-4 rounded shadow"
        >
          <img src={ext.logo} alt={ext.name} className="w-16 h-16" />
          <h2 className="text-xl font-bold mt-2">{ext.name}</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            {ext.description}
          </p>
          {!ext.isActive && (
            <span className="text-red-500 font-semibold">Inactive</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExtensionsList;

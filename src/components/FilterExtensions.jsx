import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ExtensionContext } from "../context/context.jsx";

const FilterExtensions = () => {
  const { setFilter, currentFilter } = useContext(ExtensionContext);

  const buttons = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  return (
    <section className="flex justify-center md:justify-between items-center text-lg font-bold pt-12 pb-5 px-2 w-[90%] gap-3 flex-wrap">
      <h1 className="text-3xl">Extensions List</h1>

      <section className="flex gap-2 relative">
        {buttons.map(({ label, value }) => {
          const isActive = currentFilter === value;

          return (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`relative px-4 py-1 shadow-md cursor-pointer rounded-20 transition-all overflow-hidden
                dark:border-[#d6e2f525] dark:border-1 dark:hover:bg-red-500
                focus:outline-offset-2 focus:outline-red-500 
                active:bg-red-500
                ${isActive ? "text-white" : "text-black dark:text-white"}
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-red-500 dark:bg-red-400 rounded-20 z-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </section>
    </section>
  );
};

export default FilterExtensions;

import React from "react";

const FilterExtensions = () => {
  return (
    <section className="flex justify-center md:justify-between items-center text-lg text-bold py-15 px-2 w-[90%] gap-3 flex-wrap">
      <h1 className="font-bold text-3xl">Extensions List</h1>

      <section className="flex gap-2 ">
        <button className="bg-neutral-0 px-4 py-1 shadow-md cursor-pointer dark:border-[#d6e2f525] dark:border-1 focus:outline-offset-2 focus:outline-red-500 focus:bg-red-500 active:bg-red-500 dark:hover:bg-red-400 dark:bg-[#808fc02a] hover:bg-red-300 rounded-20 transition-all">
          All
        </button>
        <button className="bg-neutral-0 px-4 py-1 shadow-md cursor-pointer dark:border-[#d6e2f525] dark:border-1 focus:outline-offset-2 focus:outline-red-500 focus:bg-red-500 active:bg-red-500 dark:hover:bg-red-400 dark:bg-[#808fc02a] hover:bg-red-300 rounded-20 transition-all">
          Active
        </button>
        <button className="bg-neutral-0 px-4 py-1 shadow-md cursor-pointer dark:border-[#d6e2f525] dark:border-1 focus:outline-offset-2 focus:outline-red-500 focus:bg-red-500 active:bg-red-500 dark:hover:bg-red-400 dark:bg-[#808fc02a] hover:bg-red-300 rounded-20 transition-all">
          Inactive
        </button>
      </section>
    </section>
  );
};

export default FilterExtensions;

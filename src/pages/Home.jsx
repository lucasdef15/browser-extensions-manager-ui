import React from "react";
import FilterExtensions from "../components/FilterExtensions";
import ExtensionsList from "../components/ExtensionsList";

const Home = () => {
  return (
    <div className="max-w-[1768px] mx-auto">
      <section className="flex justify-center items-center w-full">
        <FilterExtensions />
      </section>
      <section className="w-full bg-amber-700 flex justify-center py-5">
        <ExtensionsList />
      </section>
    </div>
  );
};

export default Home;

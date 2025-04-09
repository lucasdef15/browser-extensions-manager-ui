import React, { useContext } from "react";
import { Switch } from "@/components/ui/switch";
import { ExtensionContext } from "@/context/context";

const ExtensionsList = () => {
  const { extensions, handleToggle, handleRemove } =
    useContext(ExtensionContext);

  if (!extensions) return <p>Loading...</p>;

  return (
    <div className="flex justify-center flex-wrap gap-4 w-[90%]">
      {extensions?.map((ext, index) => (
        <div
          key={index}
          className="flex flex-col justify-between gap-3 min-w-[280px] max-w-[350px] bg-white dark:bg-neutral-700 p-4 rounded-20 shadow "
        >
          <div className="flex flex-row gap-3">
            <div>
              <img src={ext?.logo} alt={ext?.name} className="w-16 h-16" />
            </div>
            <div>
              <h2 className="text-xl font-bold mt-2">{ext?.name}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {ext.description}
              </p>
            </div>
          </div>
          <div className="mt-auto flex justify-between items-center pt-5 pb-1.5">
            <button
              onClick={() => handleRemove(index)}
              className="border-[#d6e2f5b2] hover:bg-red-700 active:outline-red-600 focus-within:outline-red-500 transition-all hover:text-white cursor-pointer font-medium border-1 text-sm rounded-20 px-2 py-1"
            >
              Remove
            </button>
            <Switch
              onCheckedChange={() => handleToggle(index)}
              className="data-[state=checked]:bg-red-700 dark:data-[state=checked]:bg-red-400 hover:data-[state=checked]:bg-red-500 hover:cursor-pointer data-[state=unchecked]:bg-gray-300"
              checked={ext?.isActive}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtensionsList;

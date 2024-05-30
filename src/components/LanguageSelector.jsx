import { useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="relative inline-block w-64 text-white">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="block appearance-none w-[20%] bg-transparent px-4  py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.516 7.548a1.11 1.11 0 011.536 0L10 10.495l2.948-2.947a1.11 1.11 0 111.536 1.536l-3.764 3.764a1.11 1.11 0 01-1.536 0L5.516 9.084a1.11 1.11 0 010-1.536z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;

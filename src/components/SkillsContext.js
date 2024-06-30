import React, { createContext, useState } from 'react';

export const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  return (
    <SkillsContext.Provider value={{ selectedSkills, setSelectedSkills }}>
      {children}
    </SkillsContext.Provider>
  );
};
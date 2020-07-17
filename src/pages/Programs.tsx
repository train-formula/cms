import React from 'react';
import { useUserSession } from '../lib/useUserSession';
import { ProgramsContainer } from '../containers/programs/ProgramsContainer';

export const Programs: React.FC = () => {
  const { data, error } = useUserSession();

  if (error || !data) {
    return null;
  }

  return <ProgramsContainer trainerOrganizationID={data.userId} />;
};

import React from 'react';
import { ExercisesContainer } from '../containers/exercises/ExercisesContainer';
import { useUserSession } from '../lib/useUserSession';

export const Exercises: React.FC = () => {
  const { data, error } = useUserSession();

  if (error || !data) {
    return null;
  }

  return <ExercisesContainer trainerOrganizationID={data.userId} />;
};

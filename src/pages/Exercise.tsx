import React from 'react';
import { useParams } from 'react-router';
import { ExerciseContainer } from '../containers/exercises/ExerciseContainer';

export const Exercise: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }
  return <ExerciseContainer exerciseId={id} />;
};

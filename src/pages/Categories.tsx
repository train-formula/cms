import React from 'react';
import { useUserSession } from '../lib/useUserSession';
import { CategoriesContainer } from '../containers/categories/CategoriesContainer';

export const Categories: React.FC = () => {
  const { data, error } = useUserSession();

  if (error || !data) {
    return null;
  }

  return <CategoriesContainer trainerOrganizationID={data.userId} />;
};

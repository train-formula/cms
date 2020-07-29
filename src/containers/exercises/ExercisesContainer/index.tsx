import React from 'react';
import styled from 'styled-components';

import { useGetBasicExercisesQuery } from '../../../graphql/queries/generated/GetBasicExercises.gql.generated';
import { flattenEdges } from '../../../lib/flattenEdges';
import { LibraryLayout } from '../../../components/templates/LibraryLayout';
import { AvailableModals } from '../../../components/Modal/reducer';
import { useModal } from '../../../components/Modal/context';

const Container = styled.div``;

export interface ExercisesContainerProps {
  trainerOrganizationID: string;
}

export const ExercisesContainer: React.FC<ExercisesContainerProps> = ({ trainerOrganizationID }) => {
  const { openModal } = useModal();

  const { data } = useGetBasicExercisesQuery({
    variables: {
      trainerOrganizationID: trainerOrganizationID,
      first: 10,
    },
  });
  if (data && data.exerciseSearch) {
    console.log(flattenEdges(data.exerciseSearch.results.edges));
  }
  return (
    <Container>
      {data && data.exerciseSearch && (
        <LibraryLayout
          ctaText="create an exercise"
          ctaOnClick={() => openModal({ type: AvailableModals.CREATE_EXERCISE })}
          filters={['title', 'tags', 'created by']}
          type="exercise"
          items={flattenEdges(data.exerciseSearch.results.edges)}
          // deleteProgram
          // copyProgram
          // count
        />
      )}
    </Container>
  );
};

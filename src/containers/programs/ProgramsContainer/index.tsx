import React from 'react';
import styled from 'styled-components';

import { LibraryLayout } from '../../../components/templates/LibraryLayout';
import { flattenEdges } from '../../../lib/flattenEdges';
import { useGetDetailProgramsQuery } from '../../../graphql/queries/generated/GetDetailPrograms.gql.generated';
import { useModal } from '../../../components/Modal/context';
import { AvailableModals } from '../../../components/Modal/reducer';

const Container = styled.div`
  height: 100%;
  .test {
    font-size: 1rem;
  }
`;

export interface ProgramsContainerProps {
  trainerOrganizationID: string;
}

export const ProgramsContainer: React.FC<ProgramsContainerProps> = ({trainerOrganizationID}) => {

  const { openModal } = useModal();

  const { data } = useGetDetailProgramsQuery({
    variables: {
      trainerOrganizationID: trainerOrganizationID,
      first: 1,
    },
  });

  return (
    <Container>
      {data && data.workoutProgramSearch && (
        <LibraryLayout
          ctaText="create a program"
          ctaOnClick={() => openModal({ type: AvailableModals.CREATE_PROGRAM })}
          filters={['title', 'difficulty', 'commitment', 'goals', 'created by']}
          type="program"
          items={flattenEdges(data.workoutProgramSearch.results.edges)}
          // deleteProgram
          // copyProgram
          // count
        />
      )}
    </Container>
  );
};

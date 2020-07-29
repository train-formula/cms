import * as React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MdSettings } from 'react-icons/md';
import Divider from '@material-ui/core/Divider';
import { SplitContent, SplitContentLeft, SplitContentRight } from '../../../components/atomic/Templates/SplitContent';
import { ExerciseEditor, PrescriptionManager } from './Components';
import { useBasicExerciseQuery } from '../../../graphql/queries/generated/BasicExercise.gql.generated';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 2rem;
  letter-spacing: 0.15rem;
  .MuiTypography-root {
    font-weight: 300;
  }
  .week-name {
    font-size: 2.4rem;
  }
  .settings {
    display: flex;
    justify-self: flex-end;
  }
`;

export interface ExerciseContainerProps {
  exerciseId: string;
}

export const ExerciseContainer: React.FunctionComponent<ExerciseContainerProps> = ({ exerciseId }) => {
  const { data, error, loading } = useBasicExerciseQuery({
    variables: {
      id: exerciseId,
    },
  });

  if (error) {
    console.error(error);
    return null;
  }

  if (!data || !data.exercise) {
    console.error('missing exercise');
    return null;
  }
  console.log(data);

  return (
    <Container>
      <Header>
        <Typography variant="h4">Exercise Name</Typography>
        <IconButton className="settings">
          <MdSettings />
        </IconButton>
      </Header>
      <Divider />
      <SplitContent>
        <SplitContentLeft>
          <ExerciseEditor exercise={data.exercise} />
        </SplitContentLeft>
        <SplitContentRight>
          <PrescriptionManager />
        </SplitContentRight>
      </SplitContent>
    </Container>
  );
};

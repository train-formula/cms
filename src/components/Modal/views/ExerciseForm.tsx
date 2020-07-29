import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { IoMdList } from 'react-icons/io';
import { FiTag, FiVideo } from 'react-icons/fi';
import { ModalContainer } from '../../atomic/Atoms/ModalContainer';
import { TagSelect } from '../../atomic/Molecules/TagSelect';
import { BasicTagFieldsFragment } from '../../../graphql/fragments/generated/BasicTagFields.gql.generated';
import { VideoInput } from '../../atomic/Atoms/VideoInput';
import { ModalSaveButton } from '../../atomic/Atoms/ModalSaveButton';
import { DescriptionField } from '../../atomic/Atoms/DescriptionField';
import { useCreateExerciseMutation } from '../../../graphql/mutations/generated/CreateExercise.gql.generated';

const NameField = styled(TextField)`
  .MuiInputBase-root {
    font-size: 4rem;
  }
`;
type FieldProps = {
  multi?: boolean;
};
const Field = styled.div<FieldProps>`
  position: relative;
  .field-icon {
    position: absolute;
    transform: ${(p) => (p.multi ? 'translate(-3.5rem, 1rem)' : 'translate(-3.5rem, 0.5rem)')};
    height: 2.5rem;
    width: 2.5rem;
    color: #5f6368;
  }
`;

type ExerciseFormValues = {
  name: string;
  description: string;
  tags: string[];
  youtubeId?: string;
};

const defaultProgramFormValues: ExerciseFormValues = {
  name: '',
  description: '',
  tags: [],
  youtubeId: undefined,
};

export const ExerciseForm: React.FC = () => {
  const [values, handleChange] = useState<ExerciseFormValues>(defaultProgramFormValues);

  const [createExercise] = useCreateExerciseMutation();
  function handleSave() {
    createExercise({
      variables: {
        input: {
          trainerOrganizationID: '110c3d5e-49fb-4b5b-b719-c3fcd57b3050',
          name: values.name,
          description: values.description,
          tags: values.tags,
        },
      },
    });
  }

  /*
    trainerOrganizationID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  videoURL?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['ID']>>;
   */

  return (
    <ModalContainer>
      <NameField
        placeholder="Add exercise name"
        value={values.name}
        onChange={(e) => {
          const value = e.target.value;
          handleChange((prev) => {
            return {
              ...prev,
              name: value,
            };
          });
        }}
      />
      <Field multi>
        <IoMdList className="field-icon" />
        <DescriptionField
          id="filled-multiline-flexible"
          label="Exercise Notes"
          placeholder="ex. Stay tight! Attack each rep!"
          multiline
          rowsMax="8"
          rows="4"
          margin="normal"
          variant="filled"
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{ shrink: true }}
          value={values.description}
          onChange={(e) => {
            const value = e.target.value;
            handleChange((prev) => {
              return {
                ...prev,
                description: value,
              };
            });
          }}
        />
      </Field>
      <Field>
        <FiTag className="field-icon" />
        <TagSelect
          trainerOrganizationID={'110c3d5e-49fb-4b5b-b719-c3fcd57b3050'}
          value={values.tags}
          onChange={(tags) => {
            handleChange((prev) => {
              return {
                ...prev,
                tags,
              };
            });
          }}
        />
      </Field>
      <Field>
        <FiVideo className="field-icon" />
        <VideoInput
          provider={'YOUTUBE'}
          videoId={values.youtubeId}
          onChange={(videoId) => {
            handleChange((prev) => {
              return {
                ...prev,
                youtubeId: videoId,
              };
            });
          }}
        />
      </Field>

      <ModalSaveButton onClick={handleSave}>create exercise</ModalSaveButton>
    </ModalContainer>
  );
};

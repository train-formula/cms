import * as React from 'react';
import { FiTag, FiVideo } from 'react-icons/fi';
import { TagSelect } from '../../../../../components/atomic/Molecules/TagSelect';
import { DescriptionField } from '../../../../../components/atomic/Atoms/DescriptionField';
import { Field, FieldInputWrapper } from './Components';
import { IoMdList } from 'react-icons/io';
import { VideoInput } from '../../../../../components/atomic/Atoms/VideoInput';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { BasicExerciseFieldsFragment } from '../../../../../graphql/fragments/generated/BasicExerciseFields.gql.generated';
import { useEditExerciseMutation } from '../../../../../graphql/mutations/generated/EditExercise.gql.generated';
import { useEffect, useState } from 'react';
import { EditExercise } from '../../../../../graphql/schema/generated/types';

const NameField = styled(TextField)`
  .MuiInputBase-root {
    font-size: 4rem;
  }
`;

export interface ExerciseEditorProps {
  exercise: BasicExerciseFieldsFragment;
}

const generateEditExericse = (exercise: BasicExerciseFieldsFragment): EditExercise => {
  return {
    id: exercise.id,
    name: exercise.name,
    description: exercise.description,
    videoURL: exercise.videoURL
      ? {
          value: exercise.videoURL,
        }
      : undefined,
    tags: {
      value: exercise.tags
        ? exercise.tags.map((tag) => {
            return tag.id;
          })
        : [],
    },
  };
};

export const ExerciseEditor: React.FunctionComponent<ExerciseEditorProps> = ({ exercise }) => {
  const [editState, setEditState] = useState<EditExercise>(generateEditExericse(exercise));

  useEffect(() => {
    setEditState(generateEditExericse(exercise));
  }, [exercise]);

  useEditExerciseMutation({
    variables: {
      input: editState,
    },
  });

  return (
    <div>
      <Field>
        <NameField
          value={editState.name}
          onChange={(e) => {
            const value = e.target.value;
            setEditState((prev) => {
              return {
                ...prev,
                name: value,
              };
            });
          }}
        />
      </Field>
      <Field>
        <IoMdList />
        <FieldInputWrapper>
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
            value={editState.description ? editState.description : ''}
            onChange={(e) => {
              const value = e.target.value;
              setEditState((prev) => {
                return {
                  ...prev,
                  description: value,
                };
              });
            }}
          />
        </FieldInputWrapper>
      </Field>
      <Field>
        <FiTag />
        <FieldInputWrapper>
          <TagSelect
            trainerOrganizationID={'110c3d5e-49fb-4b5b-b719-c3fcd57b3050'}
            value={editState?.tags?.value || []}
            onChange={(tags) => {
              setEditState((prev) => {
                return {
                  ...prev,
                  tags: {
                    value: tags,
                  },
                };
              });
            }}
          />
        </FieldInputWrapper>
      </Field>
      <Field>
        <FiVideo />
        <FieldInputWrapper>
          <VideoInput
            provider={'YOUTUBE'}
            videoId={undefined}
            onChange={(videoId) => {
              console.log(videoId);
            }}
          />
        </FieldInputWrapper>
      </Field>
    </div>
  );
};

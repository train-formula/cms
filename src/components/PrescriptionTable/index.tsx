import React, { useState } from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { PrescriptionSet, Table } from './Table';
import { BasicUnitFieldsFragment } from '../../graphql/fragments/generated/BasicUnitFields.gql.generated';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
`;

export const PrescriptionTable: React.FC = () => {
  const [primaryUnit, setPrimaryUnit] = useState<BasicUnitFieldsFragment | undefined>(undefined);
  const [secondaryUnit, setSecondaryUnit] = useState<BasicUnitFieldsFragment | undefined>(undefined);
  const [setCount, setSetCount] = useState<number>(1);

  const [editedSets, setEditedSets] = useState<{ [setNumber: number]: PrescriptionSet }>({});

  return (
    <Container>
      <Header
        primaryUnitId={primaryUnit && primaryUnit.id}
        setCount={setCount}
        secondaryUnitId={secondaryUnit && secondaryUnit.id}
        onChangeSetCount={(setCount) => setSetCount(setCount)}
        onChangePrimaryUnit={(unit) => setPrimaryUnit(unit)}
        onChangeSecondaryUnit={(unit) => setSecondaryUnit(unit)}
      />
      <Table
        sets={Array.from({ length: setCount }, (_, i) => ({
          number: i,
          primaryUnitValue: editedSets[i] ? editedSets[i].primaryUnitValue : '',
          secondaryUnitValue: editedSets[i] ? editedSets[i].secondaryUnitValue : undefined,
        }))}
        onUpdateSet={(set) => {
          setEditedSets((prev) => {
            return {
              ...prev,
              [set.number]: set,
            };
          });
        }}
      />
    </Container>
  );
};

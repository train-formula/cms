import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { Parameter, ParameterOption } from './Parameter';
import { Prescription } from './store';
import { useGetAvailableUnitsQuery } from '../../graphql/queries/generated/GetAvailableUnits.gql.generated';
import { BasicUnitFieldsFragment } from '../../graphql/fragments/generated/BasicUnitFields.gql.generated';

const Container = styled.div`
  // background: ${(p) => p.theme.formBackground}; // figure this out;
  background: #f0f2f2;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  border-radius: 0.4rem 0.4rem 0 0;
`;

interface HeaderProps {
  setCount: number;
  primaryUnitId?: string;
  secondaryUnitId?: string;
  onChangeSetCount: (setCount: number) => void;
  onChangePrimaryUnit: (unit: BasicUnitFieldsFragment) => void;
  onChangeSecondaryUnit: (unit: BasicUnitFieldsFragment) => void;
}

export const Header: React.FC<HeaderProps> = ({
  setCount,
  onChangeSetCount,
  primaryUnitId,
  secondaryUnitId,
  onChangePrimaryUnit,
  onChangeSecondaryUnit,
}) => {
  const setOptions = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: i + 1,
  }));

  const [unitOptions, setUnitOptions] = useState<ParameterOption[]>([]);
  const [unitsById, setUnitsById] = useState<{ [unitId: string]: BasicUnitFieldsFragment }>({});
  const [primaryUnitValue, setPrimaryUnitValue] = useState<string | number | undefined>(undefined);
  const [secondaryUnitValue, setSecondaryUnitValue] = useState<string | number | undefined>(undefined);

  const { data: availableUnits, error: unitsError, loading: loadingUnits } = useGetAvailableUnitsQuery();

  useEffect(() => {
    if (availableUnits && availableUnits.availableUnits) {
      const tempUnitOptions: ParameterOption[] = [];
      const tempUnitsById: { [unitId: string]: BasicUnitFieldsFragment } = {};

      availableUnits.availableUnits.forEach((availableUnit) => {
        tempUnitOptions.push({
          value: availableUnit.id,
          label: availableUnit.name,
        });

        tempUnitsById[availableUnit.id] = availableUnit;
      });

      setUnitOptions(tempUnitOptions);
      setUnitsById(tempUnitsById);
    }
  }, [availableUnits]);

  useEffect(() => {
    unitOptions.forEach((unitOption) => {
      if (unitOption.value === primaryUnitId) {
        setPrimaryUnitValue(unitOption.value);
      } else if (unitOption.value === secondaryUnitId) {
        setSecondaryUnitValue(unitOption.value);
      }
    });
  }, [unitOptions, primaryUnitId, secondaryUnitId]);

  if (unitsError) {
    console.error(unitsError);
    alert(unitsError);
  }

  return (
    <Container>
      <Parameter
        value={setCount}
        parameterOptions={setOptions}
        updateParameterValue={(value: string) => onChangeSetCount(parseInt(value))}
      />
      <Parameter
        value={primaryUnitValue}
        parameterOptions={unitOptions}
        updateParameterValue={(unitId: string) => {
          if (unitsById[unitId]) {
            onChangePrimaryUnit(unitsById[unitId]);
          }
        }}
      />
      <Parameter
        value={secondaryUnitValue}
        parameterOptions={unitOptions}
        updateParameterValue={(unitId: string) => {
          if (unitsById[unitId]) {
            onChangeSecondaryUnit(unitsById[unitId]);
          }
        }}
      />
    </Container>
  );
};

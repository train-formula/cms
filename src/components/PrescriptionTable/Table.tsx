import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: calc(28px * 10);
  background: #f0f2f2;
`;

const Set = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-auto-rows: 27px;
  border-color: #e9e9e9;
  border-style: solid;
  border-width: 0 0.1rem 0.1rem 0.1rem;
  &:last-child {
    border-radius: 0 0 0.4rem 0.4rem;
  }
  .set-count {
    background: #ffffff;
    border-right: 0.1rem solid #e9e9e9;
    color: #808080;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    &:last-of-type {
      border-radius: 0 0 0 0.4rem;
    }
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: default;
    }
  }
  .parameter1,
  .parameter2 {
    border: none;
    background: #ffffff;
    box-shadow: none;
    border-right: 0.1rem solid #e9e9e9;
    text-align: center;
    &:focus {
      outline: none;
    }
  }
  .cell {
    padding: 0.5rem 0;
    font-size: 1.4rem;
  }
`;

export type PrescriptionSet = {
  number: number;
  primaryUnitValue: string | number;
  secondaryUnitValue: string | number | undefined;
};

type Props = {
  sets: PrescriptionSet[];
  onUpdateSet: (set: PrescriptionSet) => void;
};

export const Table: React.FC<Props> = ({ sets, onUpdateSet }) => {
  return (
    <Container>
      {sets.map((set) => (
        <Set key={set.number}>
          <div className="cell set-count">{set.number + 1}</div>

          <input
            className="cell parameter1"
            value={set.primaryUnitValue}
            onChange={(val) => {
              onUpdateSet({
                ...set,
                primaryUnitValue: val.target.value,
              });
            }}
          />
          <input
            className="cell parameter2"
            value={set.secondaryUnitValue ? set.secondaryUnitValue : ''}
            onChange={(val) => {
              onUpdateSet({
                ...set,
                secondaryUnitValue: val.target.value,
              });
            }}
          />
        </Set>
      ))}
    </Container>
  );
};

import gql from 'graphql-tag';

export const BasicUnitFields = gql`
  fragment BasicUnitFields on Unit {
    id

    createdAt
    updatedAt

    name
    nameMedium
    nameShort

    representsSeconds
    representsWeight
    representsCounter
    representsDistance
  }
`;

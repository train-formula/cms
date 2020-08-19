import gql from 'graphql-tag';
import { BasicUnitFields } from '../fragments/BasicUnitFields.gql';

export const GetAvailableUnits = gql`
  query GetAvailableUnits {
    availableUnits {
      ...BasicUnitFields
    }
  }
  ${BasicUnitFields}
`;

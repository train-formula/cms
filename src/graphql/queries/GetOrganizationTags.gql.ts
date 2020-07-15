import gql from "graphql-tag";
import { BasicTagFields } from "../fragments/BasicTagFields.gql";

export const GetOrganizationTags = gql`
  query GetOrganizationTags($trainerOrganizationID: ID!) {
    organizationAvailableTags(id: $trainerOrganizationID, first: 100) {
      edges {
        node {
          ...BasicTagFields
        }
      }
    }
  }
  ${BasicTagFields}
`;

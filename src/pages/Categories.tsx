import React from "react";
import styled from "styled-components";

import { useGetBasicCategoriesQuery } from "../graphql/queries/generated/GetBasicCategories.gql.generated";
import { flattenEdges } from "../lib/flattenEdges";
import { LibraryLayout } from "../components/templates/LibraryLayout";

const Container = styled.div``;

export const Categories: React.FC = () => {
  const { data } = useGetBasicCategoriesQuery({
    variables: {
      trainerOrganizationID: "d498fa20-4614-4039-97c6-e14ddc81f04f",
      first: 10
    }
  });

  if (data && data.workoutCategorySearch) {
    console.log(flattenEdges(data.workoutCategorySearch.results.edges));
  }

  return (
    <Container>
      {data && data.workoutCategorySearch && (
        <LibraryLayout
          ctaText="create a category"
          ctaOnClick={() => console.log("void")}
          filters={["title", "tags", "created by"]}
          type="category"
          items={flattenEdges(data.workoutCategorySearch.results.edges)}
          // deleteProgram
          // copyProgram
          // count
        />
      )}
    </Container>
  );
};

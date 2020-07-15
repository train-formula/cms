import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";

import { Header, HeaderProps } from "../Library/Header";
import { Actions } from "../Library/Actions";
import { Filters, FiltersProps } from "../Library/Filters";
import { List, ListProps } from "../Library/List";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .scroll {
    flex: 1;
    overflow: auto;
  }
`;

type Props = {
  items: { [key: string]: any }[];
};

type LibraryLayoutProps = Props & HeaderProps & FiltersProps & ListProps;

export const LibraryLayout: React.FC<LibraryLayoutProps> = ({
  items,
  ctaText,
  ctaOnClick,
  filters,
  type
}) => {
  return (
    <Container>
      <Header ctaText={ctaText} ctaOnClick={ctaOnClick} />
      <Divider />
      <Actions />
      <Divider />
      <Filters filters={filters} type={type} />
      <Divider />
      <List items={items} type={type} />
    </Container>
  );
};

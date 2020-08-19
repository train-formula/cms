import * as React from 'react';
import { Wrapper } from './Components';
import { PrescriptionTable } from '../../../PrescriptionTable';

export interface CollapsibleProps {}

export const Collapsible: React.FunctionComponent<CollapsibleProps> = () => {
  return (
    <Wrapper>
      <div>Hello</div>
      <div>
        <PrescriptionTable />
      </div>
    </Wrapper>
  );
};

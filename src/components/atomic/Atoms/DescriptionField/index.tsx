import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const DescriptionField = styled(TextField)`
  width: 100%;
  margin: 0;
  .MuiInputBase-root {
    border-radius: 4px;
  }
  .MuiInputLabel-filled {
    z-index: 0;
  }
  .Mui-focused {
    color: #0000008a;
  }
`;

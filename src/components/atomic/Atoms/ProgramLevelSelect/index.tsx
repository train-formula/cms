import * as React from "react";
import Select from "react-select";
import {ProgramLevel} from "../../../../graphql/schema/generated/types";


const audienceOptions: { value: ProgramLevel; label: string }[] = [
  { value: "BEGINNER", label: "beginner" },
  { value: "INTERMEDIATE", label: "intermediate" },
  { value: "ADVANCED", label: "advanced" }
];

const selectStyles = {
  control: (styles: {}) => {
    return {
      ...styles,
      borderColor: "hsl(0,0%,80%)",
      fontWeight: 700,
      backgroundColor: "#F0F2F2",
      ".react-select__single-value": {
        lineHeight: "1.2"
      }
    };
  }
};

export interface ProgramLevelSelectProps {
  onChange: (value: ProgramLevel) => void;
}

export const ProgramLevelSelect: React.FunctionComponent<ProgramLevelSelectProps> = ({
  onChange
}) => {
  return (
    <Select
      options={audienceOptions}
      classNamePrefix="react-select"
      placeholder="Target Audience"
      styles={selectStyles}
      onChange={val => {
        if (val) {
          const conv = val as { value: ProgramLevel; label: string };

          onChange(conv.value);
        }
      }}
    />
  );
};

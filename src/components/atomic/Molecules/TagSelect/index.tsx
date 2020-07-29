import * as React from 'react';
import CreatableSelect from 'react-select/creatable';
import { useGetOrganizationTagsQuery } from '../../../../graphql/queries/generated/GetOrganizationTags.gql.generated';
import { flattenEdges } from '../../../../lib/flattenEdges';
import { BasicTagFieldsFragment } from '../../../../graphql/fragments/generated/BasicTagFields.gql.generated';
import { OptionsType } from 'react-select';
import { useEffect, useMemo, useState } from 'react';

const selectStyles = {
  control: (styles: {}) => {
    return {
      ...styles,
      borderColor: 'hsl(0,0%,80%)',
      fontWeight: 700,
      backgroundColor: '#F0F2F2',
      '.react-select__single-value': {
        lineHeight: '1.2',
      },
    };
  },
};

const tagToOpt = (tag: BasicTagFieldsFragment): { label: string; value: string } => {
  return {
    label: tag.tag,
    value: tag.id,
  };
};

const optToTag = (opt: { label: string; value: string }): BasicTagFieldsFragment => {
  return {
    id: opt.value,
    tag: opt.label,
  };
};

export interface TagSelectProps {
  trainerOrganizationID: string;
  value?: string[];
  onChange?: (values: string[]) => void;
}

type tagMap = { [tagID: string]: BasicTagFieldsFragment };

export const TagSelect: React.FunctionComponent<TagSelectProps> = ({ trainerOrganizationID, value, onChange }) => {
  const [tagMap, setTagMap] = useState<tagMap>({});

  const { data, loading, error } = useGetOrganizationTagsQuery({
    variables: {
      trainerOrganizationID,
    },
  });

  useEffect(() => {
    const map: tagMap = {};
    if (data && data.organizationAvailableTags) {
      flattenEdges(data.organizationAvailableTags.edges).forEach((val) => {
        map[val.id] = val;
      });
    }

    setTagMap(map);
  }, [data]);

  if (error) {
    console.error(error);
    return <div>Error loading tags</div>;
  }

  return (
    <CreatableSelect
      isMulti
      options={Object.values(tagMap).map(tagToOpt)}
      clasxsNamePrefix="react-select"
      placeholder="Add tag(s)"
      styles={selectStyles}
      value={
        value &&
        value.map((val) => {
          return tagToOpt(tagMap[val]);
        })
      }
      onChange={(val) => {
        if (onChange && val) {
          const conv = val as OptionsType<{ label: string; value: string }>;
          onChange(conv.map((tg) => tg.value));
        }
      }}
    />
  );
};

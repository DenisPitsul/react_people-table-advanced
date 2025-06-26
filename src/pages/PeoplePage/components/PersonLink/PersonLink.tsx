import React from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../../../../types/Person';
import { SearchLink } from '../../../../components/SearchLink';
import { Sex } from '../../../../types/Sex';

type Props = {
  person: Person;
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  const [searchParams] = useSearchParams();

  return (
    <SearchLink
      pathname={`/people/${person.slug}`}
      params={Object.fromEntries(searchParams.entries())}
      className={classNames({ 'has-text-danger': person.sex === Sex.Female })}
    >
      {person.name}
    </SearchLink>
  );
};

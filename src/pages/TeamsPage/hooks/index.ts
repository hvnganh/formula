import { useQuery } from 'react-query';
import { useState } from 'react';
import { getAllTeam } from '@/lib/services';

const useTeamPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const { data: listTeam, isLoading } = useQuery<Array<TeamCardType>>({
    queryKey: 'list-team',
    queryFn: () => getAllTeam(),
  });

  const searchListTeam = listTeam?.filter((team) => {
          if (searchValue !== '') {
              return team.teamName.toLowerCase().split(' ').includes(searchValue);
          }
          return team;
      });

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return {
    listTeam,
    searchListTeam,
    isLoading,
    handleSearchInput,
  };
};

export default useTeamPage;

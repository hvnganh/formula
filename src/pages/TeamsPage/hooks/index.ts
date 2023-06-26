import { useQuery } from 'react-query';
import { getAllTeam } from '@/lib/services';

const useTeamPage = () => {
const { data: listTeam, isLoading } = useQuery<Array<TeamCardType>>({
        queryKey: 'list-team',
        queryFn: () => getAllTeam(),
    });

    return {
        listTeam,
        isLoading,
    };
};

export default useTeamPage;

import { useQuery } from 'react-query';
import { getTeamDetail } from '@/lib/services';
import { transformNumberArray } from '@/lib/utils/transformNumberArray';

const useTeamDetailPage = (teamName = '') => {
    const { data: teamInformation, isLoading, isError } = useQuery<TeamDetailType>({
        queryKey: ['team-detail', teamName],
        queryFn: () => getTeamDetail(teamName),
    });

    const listYear = transformNumberArray(teamInformation?.listYear);
    const listParagraph = teamInformation?.listParagraph.slice(1) ?? [];

    return {
        isError,
        teamInformation,
        listYear,
        listParagraph,
        isLoading,
    };
};

export default useTeamDetailPage;

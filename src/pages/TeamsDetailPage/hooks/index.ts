import { useQuery } from 'react-query';
import { getTeamDetail } from '@/lib/services';
import { transformNumberArray } from '@/lib/utils/transformNumberArray';

const useTeamDetailPage = (teamName = '') => {
    const { data: teamInformation, isLoading } = useQuery<TeamDetailType>({
        queryKey: ['team-detail', teamName],
        queryFn: () => getTeamDetail(teamName),
    });

    const listYear = transformNumberArray(teamInformation?.listYear);
    const listParagraph = teamInformation?.listParagraph.slice(1) ?? [];

    return {
        teamInformation,
        listYear,
        listParagraph,
        isLoading,
    };
};

export default useTeamDetailPage;

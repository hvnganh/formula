import { useQuery } from 'react-query';
import { getDriverDetail } from '@/lib/services';

const useDriverDetailPage = (driverName = '') => {
    const { data: driverInformation, isLoading, isError } = useQuery<DriverDetailType>({
        queryKey: ['driver-detail', driverName],
        queryFn: () => getDriverDetail(driverName),
    });

    return {
        isError,
        driverInformation,
        isLoading,
    };
};

export default useDriverDetailPage;

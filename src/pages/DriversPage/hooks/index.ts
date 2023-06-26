import { useQuery } from 'react-query';
import { getAllDriver } from '@/lib/services';

const useDriverPage = () => {
    const { data: listDriver, isLoading } = useQuery<Array<DriverCardType>>({
        queryKey: 'list-driver',
        queryFn: () => getAllDriver(),
    });

    return {
        listDriver,
        isLoading,
    };
};

export default useDriverPage;

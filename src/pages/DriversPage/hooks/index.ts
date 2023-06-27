import { useQuery } from 'react-query';
import { useState } from 'react';
import { getAllDriver } from '@/lib/services';

const useDriverPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const { data: listDriver, isLoading } = useQuery<Array<DriverCardType>>({
        queryKey: 'list-driver',
        queryFn: () => getAllDriver(),
    });

    const searchListDriver = listDriver?.filter((driver) => {
        if (searchValue !== '') {
            return driver.nameSlug.toLowerCase().split('-').includes(searchValue.toLowerCase())
            || driver.nameSlug.toLowerCase().includes(searchValue.toLowerCase());
        }
        return driver;
    });

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
      };

    return {
        listDriver,
        isLoading,
        searchListDriver,
        handleSearchInput,
    };
};

export default useDriverPage;

import { useEffect } from 'react';
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - The Daily Baiust`;
    },[title])
}

export default useTitle;
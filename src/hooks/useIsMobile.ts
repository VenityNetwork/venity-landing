import {useEffect, useState} from "react";

const isMobileFromUserAgent = (): boolean => {
    // isMobile using navigator.userAgent
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const userAgent = navigator.userAgent;
        setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    }, []);
    return isMobile;
}

const useIsMobile = (): boolean => {
    // isMobile using useEffect
    const [isMobile, setIsMobile] = useState(isMobileFromUserAgent());
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isMobile;
}
export default useIsMobile;

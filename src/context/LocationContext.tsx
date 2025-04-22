// import axios from 'axios';
// import { useEffect, useContext, createContext, useState, ReactNode } from 'react';
// import toast from 'react-hot-toast';

// export const IpContext = createContext('');

// interface LocationContextProps {
//   children: ReactNode; // This is the correct type for children
// }

// const LocationContext: React.FC<LocationContextProps> = ({ children }) => {
//   const [location, setLocation] = useState('');
//   const [ip, setIp] = useState('');

//   useEffect(() => {
//     const ipDetector = async () => {
//       try {
//         const getIp = await axios.get(`https://api.ipify.org`);
//         const res = await getIp.data;
//         setIp(res)
//       } catch(err) {
//         console.error(err);
//       }
//     };
//     ipDetector();
//   }, []);
//   useEffect(() => {
//     const ipDetector = async () => {
//       try {
//         const getIp = await axios.get(`http://ip-api.com/json/${ip}`);
//         const res = await getIp.data.country;
//         //  console.log(res)
//         setLocation(res)
//       } catch(err) {
//         console.error(err);
//       }
//     };
//     ipDetector();
//   }, []);

//   return <IpContext.Provider value={location}>{children}</IpContext.Provider>;
// };

// export default LocationContext;
import axios from "axios";
import { parseCookies } from "nookies";
import { API_URL } from "../config";

const http = axios.create({
  baseURL: API_URL
});

http.interceptors.request.use(config => {
  const { accessToken } = parseCookies();
  (config.headers ??= {}).Authorization = `Bearer ${accessToken}`;
  return config;
});
// http.interceptors.response.use(
//   config => {
//     return config;
//   },
//   async error => {
//     console.log("interceptors", error.response.status);
//     const originalRequest = error.config;

//     if (error.response.status === 401) {
//       console.log("interceptors1");

//       //       try {
//       const { refreshToken } = parseCookies();
//       console.log("refreshToken-----1", refreshToken);
//       const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
//         withCredentials: true,
//         headers: {
//           Cookie: refreshToken
//         }
//       });
//       console.log("interceptors3", response);

//       //         cookieService.setTokens(response.data.authData);
//       //         return http.request(originalRequest);
//       //       } catch (error) {
//       //         console.log("НЕ АВТОРИЗОВАН");
//       //       }
//     }
//   }
// );

export default http;

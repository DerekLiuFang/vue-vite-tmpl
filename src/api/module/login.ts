import http from '@/utils/http';
/**
 * 登录
 */

interface IResponseType<P extends Record<string, any>> {
  code?: number;
  status: number;
  msg: string;
  data: P;
}
interface ILogin {
  token: string;
  expires: number;
}
export const login = (username: string, password: string) => {
  return http<IResponseType<ILogin>>('/api/auth/login', {
    method: 'post',
    data: {
      username,
      password,
    },
  });
};

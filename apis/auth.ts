import axiosFetch from '@/utils/axios';

export const apiPostSignUp = (data: { id: string; password: string }) =>
  axiosFetch({
    url: '/signup',
    method: 'post',
    data,
  });

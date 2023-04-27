import { useMutation } from '@tanstack/react-query';

import { apiPostSignUp } from '@/apis/auth';

export function usePostSignUp() {
  return useMutation((data: { id: string; password: string; confirmPassword: string }) =>
    apiPostSignUp(data),
  );
}

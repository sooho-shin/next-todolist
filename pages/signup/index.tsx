import type { GetServerSideProps } from 'next';
import React, { useRef } from 'react';

import { usePostSignUp } from '@/querys/auth';

export default function Signup({ testResult }: { testResult: string }) {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const { mutate } = usePostSignUp();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!idRef.current?.value || !passwordRef.current || !confirmPasswordRef.current) {
      alert('필수 항목 입력 해주세요');
    }
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      alert('재확인 비밀번호가 일치하지 않습니다.');
    }
    if (!idRef.current || !passwordRef.current || !confirmPasswordRef.current) {
      return false;
    }
    mutate(
      {
        id: idRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value,
      },
      {
        onSuccess(data, variables, context) {
          console.log('success@@@@@@@@');
          console.log(data);
          console.log(variables);
          console.log(context);
        },
        onError(error, variables, context) {
          console.log('error @@!!!');
          console.log(error);
          console.log(variables);
          console.log(context);
        },
      },
    );
  };
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h2>TodoList Sign Up</h2>
      <form
        className="w-1/5 flex flex-col items-center justify-center gap-2 "
        onSubmit={handleSignUp}
      >
        <input
          type="text"
          placeholder="ID"
          className="w-full form-input rounded text-pink-500"
          ref={idRef}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="w-full form-input rounded text-pink-500"
          ref={passwordRef}
        />
        <input
          type="password"
          placeholder="CONFIRM PASSWORD"
          className="w-full form-input rounded text-pink-500"
          ref={confirmPasswordRef}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up {testResult}
        </button>
      </form>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    testResult: 'test zz',
  },
});

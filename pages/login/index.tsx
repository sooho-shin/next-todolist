import type { GetServerSideProps } from 'next';
import React from 'react';

export default function Login() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h2>TodoList</h2>
      <form className="w-1/5 flex flex-col items-center justify-center gap-2 ">
        <input
          type="text"
          placeholder="ID"
          className="w-full form-input rounded text-pink-500"
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="w-full form-input rounded text-pink-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </button>
      </form>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    testResult: 'test',
  },
});

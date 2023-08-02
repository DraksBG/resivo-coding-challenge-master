import 'reflect-metadata';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

afterEach(cleanup);

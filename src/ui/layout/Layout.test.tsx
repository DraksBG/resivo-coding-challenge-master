import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { Layout } from './Layout';

jest.mock('next/router', () => require('next-router-mock'));

describe('Layout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-02-12T14:30:20.124'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders the AppBar', () => {
    mockRouter.push('/test');

    render(
      <Layout title="test">
        <div>Hello World!</div>
      </Layout>,
    );
    const appBarElement = screen.getByRole('banner');
    expect(appBarElement).toBeInTheDocument();
  });

  it('renders the title', () => {
    mockRouter.push('/test');

    render(
      <Layout title="test">
        <div>Hello World!</div>
      </Layout>,
    );
    const titleElement = screen.getByRole('heading', { name: /test/i });
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the children', () => {
    mockRouter.push('/test');

    render(
      <Layout title="test">
        <div>Hello World!</div>
      </Layout>,
    );
    const childElement = screen.getByText(/Hello World!/i);
    expect(childElement).toBeInTheDocument();
  });

  // If you still want to use snapshot testing
  it('matches the snapshot', () => {
    mockRouter.push('/test');

    const { container } = render(
      <Layout title="test">
        <div>Hello World!</div>
      </Layout>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

});

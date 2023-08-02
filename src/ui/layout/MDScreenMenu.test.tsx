import { render, screen, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MDScreenMenu } from './MDScreenMenu';

jest.mock('next/router', () => require('next-router-mock'));

describe('MDScreenMenu', () => {
  const handleCloseNavMenu = jest.fn();

  it('renders NavbarListItemButton', () => {
    mockRouter.push('/test');
    render(<MDScreenMenu onNavMenuClose={handleCloseNavMenu} />);
    
    const navbarItem = screen.getByRole('link', { name: /doors/i });
    expect(navbarItem).toBeInTheDocument();
  });

  it('invokes onNavMenuClose function when list item is clicked', () => {
    mockRouter.push('/test');
    render(<MDScreenMenu onNavMenuClose={handleCloseNavMenu} />);

    const list = screen.getByRole('list');
    fireEvent.click(list);
    expect(handleCloseNavMenu).toHaveBeenCalled();
  });

  it('matches the snapshot', () => {
    mockRouter.push('/test');
    const { container } = render(<MDScreenMenu onNavMenuClose={handleCloseNavMenu} />);

    expect(container.firstChild).toMatchSnapshot();
});

});

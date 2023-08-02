import { render, fireEvent, screen } from '@testing-library/react';
import { XSScreenMenu } from './XSScreenMenu';

jest.mock('next/router', () => require('next-router-mock'));

describe('XSScreenMenu', () => {
  it('should render correctly', () => {
    const handleNavMenuOpen = jest.fn();
    const handleNavMenuClose = jest.fn();

    render(
      <XSScreenMenu
        navAnchorElement={null}
        onNavMenuOpen={handleNavMenuOpen}
        onNavMenuClose={handleNavMenuClose}
      />,
    );

    expect(screen.getByRole('button', { name: /menu button/i })).toBeInTheDocument();
  });

  it('should open the menu when the menu button is clicked', () => {
    const handleNavMenuOpen = jest.fn();
    const handleNavMenuClose = jest.fn();

    render(
      <XSScreenMenu
        navAnchorElement={null}
        onNavMenuOpen={handleNavMenuOpen}
        onNavMenuClose={handleNavMenuClose}
      />,
    );

    const menuButton = screen.getByLabelText(/menu button/i);
    fireEvent.click(menuButton);

    expect(handleNavMenuOpen).toHaveBeenCalledTimes(1);
  });

  it('should close the menu when the menu item is clicked', () => {
    const handleNavMenuOpen = jest.fn();
    const handleNavMenuClose = jest.fn();

    render(
      <XSScreenMenu
        navAnchorElement={null}
        onNavMenuOpen={handleNavMenuOpen}
        onNavMenuClose={handleNavMenuClose}
      />,
    );

    const menuButton = screen.getByLabelText(/menu button/i);
    fireEvent.click(menuButton);

    const menuItem = screen.getByText(/Doors/i); // Find the menu item by text
    fireEvent.click(menuItem);

    expect(handleNavMenuClose).toHaveBeenCalledTimes(1);
  });
});

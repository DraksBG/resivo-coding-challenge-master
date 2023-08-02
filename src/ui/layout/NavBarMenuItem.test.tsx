import { render, fireEvent, screen } from '@testing-library/react';
import { NavBarMenuItem } from './NavBarMenuItem';

describe('NavBarMenuItem', () => {
  it('should render correctly', () => {
    const onNavBarMenuItemClick = jest.fn();

    render(
      <NavBarMenuItem
        label="Test"
        href="/test"
        onClick={onNavBarMenuItemClick}
      />
    );

    expect(screen.getByRole('menuitem')).toMatchSnapshot();
  });


  it('should not be selected when the pathname does not match the href', () => {
    // Mock the useRouter hook to have a different pathname
    jest.mock('next/router', () => ({
      useRouter() {
        return {
          route: '/',
          pathname: '/other', // Non-matching href
          query: '',
          asPath: '/',
        };
      },
    }));

    render(<NavBarMenuItem label="Test" href="/test" onClick={undefined} />);

    const menuItem = screen.getByRole('menuitem');
    expect(menuItem).not.toHaveAttribute('aria-selected');
  });

  it('should call the onClick handler when clicked', () => {
    const onNavBarMenuItemClick = jest.fn();

    render(
      <NavBarMenuItem
        label="Test"
        href="/test"
        onClick={onNavBarMenuItemClick}
      />
    );

    const menuItem = screen.getByRole('menuitem');
    fireEvent.click(menuItem);

    expect(onNavBarMenuItemClick).toHaveBeenCalledTimes(1);
  });
});

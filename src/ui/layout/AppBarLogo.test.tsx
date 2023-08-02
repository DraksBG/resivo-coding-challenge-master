import { render, screen } from '@testing-library/react';
import { AppBarLogo } from './AppBarLogo';

describe('AppBarLogo', () => {

  it('renders the logo correctly', () => {
    render(<AppBarLogo />);
    const logo = screen.getByAltText(/dormakaba logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { container } = render(<AppBarLogo />);
    expect(container.firstChild).toMatchSnapshot();
  });

});

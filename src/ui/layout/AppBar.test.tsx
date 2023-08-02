import { render, screen, fireEvent } from '@testing-library/react';
import AppBar from './AppBar';

describe('AppBar', () => {

  it('renders AppBarLogo', () => {
    render(<AppBar />);
    const logo = screen.getByAltText(/dormakaba logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders AppBarDate', () => {
    render(<AppBar />);
    const date = screen.getByText(/7\/31\/2023/i);
    expect(date).toBeInTheDocument();
});

 it('renders and interacts with XSScreenMenu', async () => {
  render(<AppBar />);
  const xsScreenMenuIcon = screen.getByRole('button', { name: /menu button/i });
  expect(xsScreenMenuIcon).toBeInTheDocument();
  
  fireEvent.click(xsScreenMenuIcon);

  // The menu might need some time to appear, so let's wait for the menu item
  const xsMenuItem = await screen.findByRole('menuitem', { name: /doors/i });
  expect(xsMenuItem).toBeInTheDocument();

  fireEvent.click(xsMenuItem);

  // Test that the menu closed
  expect(screen.queryByRole('menuitem', { name: /doors/i })).not.toBeInTheDocument();
});


  it('renders and interacts with MDScreenMenu', () => {
    render(<AppBar />);
    const mdMenuItem = screen.getByRole('link', { name: /doors/i });
    expect(mdMenuItem).toBeInTheDocument();
  
    fireEvent.click(mdMenuItem);
  });
});

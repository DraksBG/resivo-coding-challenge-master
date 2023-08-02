import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Door } from '@/models/Door';
import { DoorDetail } from './DoorDetail';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme';

const door: Door = {
  id: '63f637c9f3c48a124616044b',
  name: 'Building Main Entrance',
  buildingName: 'Bahnhofstrasse 10A',
  connectionType: 'wired',
  connectionStatus: 'offline',
  lastConnectionStatusUpdate: '2021-09-15T08:00:00.000Z',
};

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('DoorDetail', () => {
  it('renders door details correctly', () => {
    renderWithTheme(<DoorDetail door={door} />);

    Object.entries(door).forEach(([_, value]) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('applies correct color based on connection status', () => {
    renderWithTheme(<DoorDetail door={door} />);
    const connectionStatusElement = screen.getByText(door.connectionStatus);
    const color = door.connectionStatus === 'online' ? theme.palette.success.main : theme.palette.error.main;
    expect(connectionStatusElement).toHaveStyle(`color: ${color}`);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<DoorDetail door={door} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

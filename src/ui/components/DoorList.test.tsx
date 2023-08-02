import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Door } from '@/models/Door';
import { DoorList } from './DoorList';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('@mui/x-data-grid', () => {
  const mockDataGrid = jest.fn();
  return {
    DataGrid: mockDataGrid,
  };
});
const doors: Door[] = [
  {
    id: '63f637c9f3c48a124616044b',
    name: 'Building Main Entrance',
    buildingName: 'Bahnhofstrasse 10A',
    connectionType: 'wired',
    connectionStatus: 'offline',
    lastConnectionStatusUpdate: '2021-09-08T09:00:00.000Z',
  },
];

describe('DoorList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<DoorList doors={doors} />);
    expect(asFragment()).toMatchSnapshot();
  });


  it('renders door details correctly', () => {
    const mockDataGrid = jest.requireMock('@mui/x-data-grid').DataGrid;
  
    render(<DoorList doors={doors} />);
    
    expect(mockDataGrid).toHaveBeenCalledWith(
      expect.objectContaining({ 
        rows: doors.map(door => ({ 
          id: door.id, 
          name: door.name,
          buildingName: door.buildingName,
          connectionType: door.connectionType,
          connectionStatus: door.connectionStatus,
          lastConnectionStatusUpdate: door.lastConnectionStatusUpdate
        }))
      }), 
      {}
    );
  });
});

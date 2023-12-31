import { useRouter } from 'next/router';
import { Door } from '@/models/Door';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

interface DoorListProps {
  doors: Door[];
}

export function DoorList({ doors }: DoorListProps) {
  const router = useRouter();

  const onDoorRowClick = (gridRow: GridRowParams<Door>) => {
    router.push({
      pathname: '/doors/[doorId]',
      query: { doorId: gridRow.id },
    });
  };

  const columns: GridColDef<Door>[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'buildingName',
      headerName: 'Building',
      flex: 1,
    },
    {
      field: 'connectionType',
      headerName: 'Connection type',
      flex: 1,
    },
    {
      field: 'connectionStatus',
      headerName: 'Connection status',
      flex: 1,
      renderCell: ({ row: door }) => {
        return (
          <Typography color={door.connectionStatus === 'online' ? 'success.main' : 'error.main'}>
            {door.connectionStatus}
          </Typography>
        );
      },
    },
    {
      field: 'lastConnectionStatusUpdate',
      headerName: 'Last connection status update',
      flex: 1,
    },
  ];

  return (
    <DataGrid
      autoHeight
      hideFooter
      rows={doors}
      columns={columns}
      disableSelectionOnClick
      onRowClick={onDoorRowClick}
    />
  );
}

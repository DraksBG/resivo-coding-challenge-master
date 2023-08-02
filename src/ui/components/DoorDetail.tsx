import Typography from '@mui/material/Typography';
import { Door } from '@/models/Door';
import { DetailPageContainer } from '@/ui/layout/DetailPageContainer';
import { DetailPageItem } from '@/ui/layout/DetailPageItem';

interface DetailItemProps {
  label: string;
  value: string;
  color?: string;
}

function DetailItem({ label, value, color }: DetailItemProps) {
  return (
    <DetailPageItem label={label}>
      <Typography color={color}>{value}</Typography>
    </DetailPageItem>
  );
}

interface DoorDetailProps {
  door: Door;
}

export function DoorDetail({ door }: DoorDetailProps) {
  return (
    <DetailPageContainer>
      <DetailItem label="ID" value={door.id} />
      <DetailItem label="Name" value={door.name} />
      <DetailItem label="Building" value={door.buildingName} />
      <DetailItem label="Connection type" value={door.connectionType} />
      <DetailItem label="Last connection" value={door.lastConnectionStatusUpdate} />
      <DetailItem
        label="Connection status"
        value={door.connectionStatus}
        color={door.connectionStatus === 'online' ? 'success.main' : 'error.main'}
      />
    </DetailPageContainer>
  );
}

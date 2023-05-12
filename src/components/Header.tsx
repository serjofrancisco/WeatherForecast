import LocationCard from '@/components/LocationCard';
import ChangeLocationForm from './ChangeLocationForm';

export default function Header() {
  const styling = {
    backgroundColor: 'rgb(205 205 205 / 88%)',
    padding: '15px',
  } as const;

  return (
    <header style={styling}>
      <LocationCard />
      <ChangeLocationForm />
    </header>
  );
}

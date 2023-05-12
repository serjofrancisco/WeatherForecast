import LocationCard from '@/components/LocationCard';
import ChangeLocationForm from './ChangeLocationForm';

export default function Header() {
  return (
    <header>
      <h1>Clima Para a Localização</h1>
      <LocationCard />
      <ChangeLocationForm />
    </header>
  );
}

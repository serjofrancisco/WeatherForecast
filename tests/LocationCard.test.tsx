import LocationCard from '@/components/LocationCard';
import renderWithContext from './helpers/renderWithContext';
import contextMock from './mocks/contextMock';

describe('LocationCard', () => {
  it('should render the location values', async () => {
    const { findByText } = renderWithContext(<LocationCard />, contextMock);
    const location = await findByText(/rio de janeiro-rj/i);
    expect(location).toBeDefined();
    const country = await findByText(/Brasil/i);
    expect(country).toBeDefined();
    const sunrise = await findByText(/nascer do sol: 06:09/i);
    expect(sunrise).toBeDefined();
    const sunset = await findByText(/pôr do sol: 17:34/i);
    expect(sunset).toBeDefined();
  });
});

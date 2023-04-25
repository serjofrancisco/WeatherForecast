import WeatherCard from '@/components/WeatherCard';
import { render } from '@testing-library/react';
import weatherMock from './mocks/weatherCardMock';

describe('WeatherCard', () => {
  it('should render the weather card', async () => {
    const { findByText } = render(<WeatherCard weather={weatherMock} />);
    const description = await findByText(/chuva leve/i);
    expect(description).toBeDefined();
    const temperaturaAtual = await findByText(/temperatura atual: 25.17/i);
    expect(temperaturaAtual).toBeDefined();
    const temperaturaMaxima = await findByText(/temperatura máxima: 25.17/i);
    expect(temperaturaMaxima).toBeDefined();
    const temperaturaMinima = await findByText(/temperatura mínima: 25.17/i);
    expect(temperaturaMinima).toBeDefined();
    const chanceDeChuva = await findByText(/Chance de Chuva: 34%/i);
    expect(chanceDeChuva).toBeDefined();
  });
});

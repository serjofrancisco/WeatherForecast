import { waitForElementToBeRemoved } from '@testing-library/react';
import CurrentWeatherCard from '../src/components/CurrentWeatherCard';
import currentWeather from './mocks/currentWeatherMock';
import renderWithContext from './helpers/renderWithContext';
import contextMock from './mocks/contextMock';

describe('CurrentWeatherCard', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({} as Response));
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve(currentWeather),
    } as any);
  });

  it('should render the current weather card', async () => {
    const { findByText } = renderWithContext(<CurrentWeatherCard />, contextMock);
    const nuvens = await findByText(/nuvens dispersas/i);
    expect(nuvens).toBeDefined();
    const temperaturaAtual = await findByText(/temperatura atual: 23.71/i);
    expect(temperaturaAtual).toBeDefined();
    const sensacaoTermica = await findByText(/sensação térmica: 23.65/i);
    expect(sensacaoTermica).toBeDefined();
    const temperaturaMaxima = await findByText(/temperatura máxima: 24.29/i);
    expect(temperaturaMaxima).toBeDefined();
    const temperaturaMinima = await findByText(/temperatura mínima: 22.86/i);
    expect(temperaturaMinima).toBeDefined();
    const umidade = await findByText(/umidade: 58/i);
    expect(umidade).toBeDefined();
    const velocidadeVento = await findByText(/velocidade do vento: 7.2km\/h/i);
    expect(velocidadeVento).toBeDefined();
  });
  it('should render and unrender the message carregando', async () => {
    const { queryByText } = renderWithContext(<CurrentWeatherCard />, contextMock);
    await waitForElementToBeRemoved(() => queryByText(/carregando/i));
    expect(queryByText(/carregando/i)).toBeNull();
  });
});

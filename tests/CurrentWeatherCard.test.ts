// import { render, screen } from '@testing-library/react';
// import CurrentWeatherCard from '../src/components/CurrentWeatherCard';
// import currentWeather from './mocks/currentWeatherMock';

// //mock the service

// jest.mock('../src/services/weatherService.ts', () => {
//     return {
//         getCurrentWeatherFromAPI: jest.fn().mockResolvedValue(currentWeather)
//     }
// })

// describe('CurrentWeatherCard', () => {
//     it('should render the current weather card', async () => {
//         const  { getByText }= render(<CurrentWeatherCard />);
//         expect(screen.getByText('Vila Joaniza')).toBeInTheDocument();
//     });
// });

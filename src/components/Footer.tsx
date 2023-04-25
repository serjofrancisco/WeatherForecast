export default function Footer() {
  const styling = {
    color: 'white',
    zIndex: 1,
  } as const;
  return (
    <footer style={styling}>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://github.com/serjofrancisco">Sérgio Francisco</a>
        2023
      </p>
      <p>
        API:
        {' '}
        <a href="https://opencagedata.com/">OpenCage</a>
      </p>
      <p>
        API:
        {' '}
        <a href="https://openweathermap.org/">OpenWeather</a>
      </p>
      <p>
        API:
        {' '}
        <a href="https://servicodados.ibge.gov.br/api/docs/localidades">IBGE</a>
      </p>
    </footer>
  );
}

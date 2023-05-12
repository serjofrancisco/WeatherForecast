export default function Footer() {
  const styling = {
    backgroundColor: 'rgb(205 205 205 / 88%)',
    color: 'black',
    padding: '10px',
    textAlign: 'center',
  } as const;

  const linkStyle = {
    color: '#801c1c',
    textDecoration: 'underline',
  };
  return (
    <footer style={styling}>
      <p>
        <b>API:</b>
        {' '}
        <a style={linkStyle} href="https://opencagedata.com/">OpenCage</a>
        {' | '}
        <a style={linkStyle} href="https://openweathermap.org/">OpenWeather</a>

        {' | '}
        <a style={linkStyle} href="https://servicodados.ibge.gov.br/api/docs/localidades">IBGE</a>
      </p>
      <p>
        <b>Desenvolvido por:</b>
        {' '}
        <a href="https://github.com/serjofrancisco">Sérgio Francisco</a>
      </p>
    </footer>
  );
}

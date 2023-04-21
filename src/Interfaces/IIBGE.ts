export interface IIBGEStates {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
}

export interface IIBGECities {
  'municipio-id': number,
  'municipio-nome': string,
  'microrregiao-id': number,
  'microrregiao-nome': string,
  'mesorregiao-id': number,
  'mesorregiao-nome': string,
  'regiao-imediata-id': number,
  'regiao-imediata-nome': string,
  'regiao-intermediaria-id': number,
  'regiao-intermediaria-nome': string,
  'UF-id': number,
  'UF-sigla': string,
  'UF-nome': string,
  'regiao-id': number,
  'regiao-sigla': string,
  'regiao-nome': string
}

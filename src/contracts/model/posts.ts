export default interface Post {
  cdUnimed: number;
  nmUnimed: string;
  telefone: string;
  site?: string;
  latitude: number;
  longitude: number;
  uf: string;
  cdCidade: string;
  cidade: string;
  bairro: string;
  endereco: string;
  cep: number;
  nroANS: number;
  dsTipoPrestador: string;
  [x: string]: string | number | undefined;
}

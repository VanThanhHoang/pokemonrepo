export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites[];
  weight: number;
}
export interface PokemonListResponse {
  count: number;
  next: Url;
  previous: Url;
  results: PokemonResult[];
}
export interface PokemonResult {
  name: string;
  url: Url;
}
export type Url = string;
export interface Sprites {
  back_default: Url;
  front_default: Url;
}

export type CharacterId = number;

export type Filter = string;

export type State = {
  filter: Filter,
  characterIds: CharacterId[],
}

export type Action<Payload> = {
  type: string,
  payload: Payload,
};

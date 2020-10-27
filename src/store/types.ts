export type CharacterId = number;

export type Filter = number | null;

export type State = {
  filter: Filter,
  characterIds: CharacterId[],
}

export type Action<Payload> = {
  type: string,
  payload: Payload,
};

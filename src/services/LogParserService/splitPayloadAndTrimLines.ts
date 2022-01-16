import { trim } from "ramda";

export const splitPayloadAndTrimLines = (payload: string): string[] =>
  payload.split('\n').map(trim)

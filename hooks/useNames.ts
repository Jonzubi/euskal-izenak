import { Name } from "../types/izenak"

const namesJson = require('../assets/names/names.json')

export const useNames = () => {
  const names : Name[] = namesJson
  return names.slice(0, 10)
}
import { Name } from "../types/izenak"

const namesJson = require('../assets/names/names.json')

export const getName = () => {
  return namesJson[Math.floor(Math.random() * namesJson.length)] as Name 
}
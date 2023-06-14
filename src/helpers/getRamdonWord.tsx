const words: string[] = [
  "perro",
  "gato",
  "casa",
  "amarillo",
  "manzana",
  "jardin",
  "silla",
  "luz",
  "arco iris",
  "montaña",
  "felicidad",
  "libro",
  "computadora",
  "lapiz",
  "rio",
  "ciudad",
  "playa",
  "nube",
  "sombrero",
  "flores",
];

export function getRamdonWord() {
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

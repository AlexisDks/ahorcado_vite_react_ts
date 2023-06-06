const words: string[] = [
  "perro",
  "gato",
  "casa",
  "amarillo",
  "manzana",
  "jardín",
  "silla",
  "luz",
  "arco iris",
  "montaña",
  "felicidad",
  "libro",
  "computadora",
  "lápiz",
  "río",
  "ciudad",
  "playa",
  "nube",
  "sombrero",
  "flores",
];

export function getRamdonWord() {
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

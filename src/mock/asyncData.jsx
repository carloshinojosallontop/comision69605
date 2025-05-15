const data = [
  {
    id: "01",
    name: "Mario Kart 8 | Juego para Nintendo Switch",
    description:
      "¡Bienvenido al emocionante mundo de Mario Kart 8 Deluxe, donde la velocidad se combina con la diversión en cada curva!",
    price: 65,
    stock: 35,
    category: "nintendo",
    img: "../images/mariokart.webp",
  },
  {
    id: "02",
    name: "Super Mario Odyssey | Juego para Nintendo Switch",
    description:
      "Embárcate en una odisea épica con Nintendo Super Mario Odyssey para Nintendo Switch. ",
    price: 56,
    stock: 9,
    category: "nintendo",
    img: "../images/marioodissey.webp",
  },
  {
    id: "03",
    name: "Borderlands 3 - Juego para PlayStation 4",
    description:
      "Vuelve el padre de los shooter-looter, con una aventura llena de caos y tropecientas mil armas! Arrasa a tus enemigos y descubre mundos inéditos con uno de los cuatro nuevos buscadores de la cámara.",
    price: 20,
    stock: 5,
    category: "ps4",
    img: "../images/borderlands3.webp",
  },
  {
    id: "04",
    name: "Fishing Sim World - Juego para PlayStation 4",
    description:
      "Fishing Sim World: Pro Tour cuenta con un modo Trayectoria donde te esforzarás para llegar a lo más alto de la pesca de élite.",
    price: 15,
    stock: 45,
    category: "ps4",
    img: "../images/fishing.webp",
  },
  {
    id: "05",
    name: "EA Sports FC 25 | Juego para PlayStation 5",
    description:
      "Forma equipo en el modo 5 contra 5 de Rush, una nueva forma de jugar con amigos en los modos Football Ultimate Team, Clubes y Partido rápido en un terreno de juego reducido. ",
    price: 75,
    stock: 15,
    category: "ps5",
    img: "../images/fc25.webp",
  },
  {
    id: "06",
    name: "Lego Horizon Adventures | Juego para PlayStation 5",
    description:
      "Únete a la cazadora Aloy y a su pintoresca banda de héroes mientras recorren un exuberante paisaje en su misión de salvar el mundo y descubrir secretos del pasado.",
    price: 75,
    stock: 35,
    category: "ps5",
    img: "../images/legohorizon.webp",
  },
  {
    id: "07",
    name: "The Legend of Zelda: Echoes of Wisdom | Juego para Nintendo Switch",
    description:
      "¡Salva el reino de Hyrule con la sabiduría de la princesa Zelda! Los habitantes de Hyrule han estado desvaneciéndose por unas extrañas brechas, al igual que cierto espadachín, el rey de Hyrule y sus consejeros, entre otros.",
    price: 40,
    stock: 25,
    category: "ofertas",
    img: "../images/thelegendofzelda.webp",
  },
  {
    id: "08",
    name: "Silent Hill 2 2024 | Juego para PlayStation 5",
    description:
      "Experimenta una obra maestra del terror psicológico, considerado como el mejor juego de la saga, en el hardware más avanzado con elementos visuales y sonidos viscerales.",
    price: 30,
    stock: 80,
    category: "ofertas",
    img: "../images/silenthill.webp",
  },
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve(data);
      } else {
        reject("Estamos en mantenimiento. Intente mas tarde");
      }
    }, 500);
  });
};

export const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let product = data.find((item) => item.id === id);
      resolve(product);
    }, 500);
  });
};

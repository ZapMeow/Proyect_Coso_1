// src/data/productData.js
import CatanImage from '../assets/products/catan.png';
import ChairImage from '../assets/products/silla_aplastada.png';
import MouseImage from '../assets/products/mouse.png';
import MousepadImage from '../assets/products/mousepad.png';
import JimboPlushImage from '../assets/products/jimboplush.png';
import SteanDeckImage from '../assets/products/steamdeck.png';

// puedes agregar más imágenes luego

export const FakeDates = [
  {
    title: "Catan",
    distributor: "Catan Inc.",
    distributorLink: "https://youtu.be/J8SBp4SyvLc?si=3Y4W4pOTVIH4Urgu",
    price: 29990,
    description:
      "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores.",
    category: "tablegame",
    rating: 5,
    image: CatanImage,
  },
  {
    title: "Secretlab Titan",
    distributor: "Silla Inc.",
    distributorLink: "https://youtu.be/d5NEeeju30Y?si=AwapttS0CqdBNB-N",
    price: 249990,
    description:
      "Diseñada para el máximo confort, esta silla ofrece soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.",
    category: "chair",
    rating: 7,
    image: ChairImage,
  },
  {
    title: "Logitech G502 HERO",
    distributor: "Mause Inc.",
    distributorLink: "https://youtu.be/d5NEeeju30Y?si=AwapttS0CqdBNB-N",
    price: 49990,
    description:
      "Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan control y rendimiento.",
    category: "mouse",
    rating: 7,
    image: MouseImage,
  },
  {
    title: "Razer Goliathus Extended Chroma",
    distributor: "Mousepad Inc.",
    distributorLink: "https://youtu.be/d5NEeeju30Y?si=AwapttS0CqdBNB-N",
    price: 29990,
    description:
      "Mousepad extendido con iluminación RGB Chroma. Textura ideal para todo tipo de sensores y estilos de juego.",
    category: "mousepad",
    rating: 6,
    image: MousepadImage,
  },
  {
    title: "Balatro Jimbo Plush",
    distributor: "LocalThunk",
    distributorLink: "https://youtu.be/d5NEeeju30Y?si=AwapttS0CqdBNB-N",
    price: 19990,
    description: "El Balatro Jimbo más adorable para tus estanterías gamer.",
    category: "plush",
    rating: 10,
    image: JimboPlushImage,
  },
  // ⚙️ Productos falsos extra
  {
    title: "Steam Deck",
    distributor: "Valve Corp.",
    distributorLink: "https://store.steampowered.com/steamdeck",
    price: 499990,
    description: "Consola portátil de alto rendimiento para jugar tus títulos de Steam en cualquier lugar.",
    category: "console",
    rating: 9,
    image: SteanDeckImage,
  },
  {
    title: "HyperX Cloud II",
    distributor: "HyperX",
    distributorLink: "https://example.com/hyperx",
    price: 79990,
    description: "Auriculares con sonido envolvente 7.1 y micrófono desmontable.",
    category: "accessory",
    rating: 8,
    image: "https://i.pinimg.com/236x/35/db/a9/35dba9e5de0bdca31c0d88365e714f28.jpg",
  },
  {
    title: "Corsair K70 RGB TKL",
    distributor: "Corsair",
    distributorLink: "https://example.com/corsair-k70",
    price: 119990,
    description: "Teclado mecánico compacto con interruptores rápidos y retroiluminación RGB dinámica.",
    category: "accessory",
    rating: 9,
    image: "https://i.pinimg.com/236x/35/db/a9/35dba9e5de0bdca31c0d88365e714f28.jpg",
  },
  {
    title: "Razer DeathAdder V3",
    distributor: "Razer",
    distributorLink: "https://example.com/deathadder",
    price: 69990,
    description: "Mouse ergonómico con sensor Focus Pro 30K para máxima precisión.",
    category: "mouse",
    rating: 8,
    image: "https://i.pinimg.com/236x/35/db/a9/35dba9e5de0bdca31c0d88365e714f28.jpg",
  },
  {
    title: "MSI Katana 15",
    distributor: "MSI",
    distributorLink: "https://example.com/msi",
    price: 1249990,
    description: "Laptop gamer con procesador i7 y RTX 4060 para un rendimiento superior.",
    category: "pc",
    rating: 10,
    image: "https://i.pinimg.com/236x/35/db/a9/35dba9e5de0bdca31c0d88365e714f28.jpg",
  },
  // ... agrega más hasta llegar a 20
];
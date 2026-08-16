export interface PizzaSize {
  label: string;   // "Personal", "Mediana", "Grande"
  pieces: string;  // "6 pieces"
  price: string;   // "$12.99"
}

export interface MenuItem {
  name: string;
  description: string;
  sizes: PizzaSize[];
}

export const menuItems: MenuItem[] = [
  {
    name: "Pizza Gold",
    description: "Salsa de toma, mozzarella, pepperoni, ricotta y miel picante.",
    sizes: [
      { label: "Personal", pieces: "4 pzs", price: "$8.99" },
      { label: "Mediana", pieces: "6 pzs", price: "$12.99" },
      { label: "Grande", pieces: "8 pzs", price: "$16.99" },
    ],
  },
    {
    name: "Carnivora",
    description: "salsa de tomate, mozzarella, pepperoni, jamón, tocino y salchicha",
    sizes: [
      { label: "Personal", pieces: "4 pzs", price: "$10.99" },
      { label: "Mediana", pieces: "6 pzs", price: "$14.99" },
      { label: "Grande", pieces: "8 pzs", price: "$18.99" },
    ],
  },
    {
    name: "4 Quesos",
    description: "salsa de pizza, ricotta, cheddar, Danes y mozzarella.",
    sizes: [
      { label: "Personal", pieces: "4 pzs", price: "$10.99" },
      { label: "Mediana", pieces: "6 pzs", price: "$14.99" },
      { label: "Grande", pieces: "8 pzs", price: "$18.99" },
    ],
  },
    {
    name: "Vegetariana",
    description: "salsa de tomate, mozzarella, pimentones, cebolla, champiñones y aceitunas negras",
    sizes: [
      { label: "Personal", pieces: "4 pzs", price: "$10.99" },
      { label: "Mediana", pieces: "6 pzs", price: "$14.99" },
      { label: "Grande", pieces: "8 pzs", price: "$18.99" },
    ],
  },
    {
    name: "La Suprema",
    description: "salsa de tomate, mozzarella, Peperoni, jamón, salchicha, pimentones, cebolla, champiñones y aceitunas negras",
    sizes: [
      { label: "Personal", pieces: "4 pzs", price: "$10.99" },
      { label: "Mediana", pieces: "6 pzs", price: "$14.99" },
      { label: "Grande", pieces: "8 pzs", price: "$18.99" },
    ],
  },
    {
    name: "Margarita",
    description: "salsa de tomate, mozzarella, parmesano, albahaca y aceite de oliva. ",
    sizes: [
      { label: "Personal", pieces: "4 pzs", price: "$10.99" },
      { label: "Mediana", pieces: "6 pzs", price: "$14.99" },
      { label: "Grande", pieces: "8 pzs", price: "$18.99" },
    ],
  },
    {
    name: "La Ranchera",
    description: "salsa de tomate, mozzarella, chorizo, jalapeño y cebolla",
    sizes: [
      { label: "Personal", pieces: "4 pzs", price: "$10.99" },
      { label: "Mediana", pieces: "6 pzs", price: "$14.99" },
      { label: "Grande", pieces: "8 pzs", price: "$18.99" },
    ],
  },
    {
    name: "Hawaiana",
    description: "salsa de tomate, mozzarella, jamón y piña caramelizada",
    sizes: [
      { label: "Personal", pieces: "4 pzs", price: "$10.99" },
      { label: "Mediana", pieces: "6 pzs", price: "$14.99" },
      { label: "Grande", pieces: "8 pzs", price: "$18.99" },
    ],
  },
];
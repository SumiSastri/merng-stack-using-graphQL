export const booksMocks = [
  { 
    id: "s1", 
    name: "Where Peacocks Fly", 
    genre: "Fantasy", 
    author: { 
      id: "a1", 
      name: "John Smith", 
      books: [
        { id: "s1", name: "Where Peacocks Fly" },
        { id: "s4", name: "The Hidden Garden" },
        { id: "s5", name: "Moonlight Sonata" },
      ] 
    }   
  },
  { 
    id: "s2", 
    name: "Water On a Lotus Leaf", 
    genre: "Romance", 
    author: { 
      id: "a2", 
      name: "Jane Doe", 
      books: [
        { id: "s2", name: "Water On a Lotus Leaf" },
        { id: "s6", name: "Whispers in the Wind" },
        { id: "s7", name: "A Summer Promise" },
      ] 
    } 
  },
  { 
    id: "s3", 
    name: "Stardust Memories", 
    genre: "Science Fiction", 
    author: { 
      id: "a3", 
      name: "Alice Johnson", 
      books: [
        { id: "s3", name: "Stardust Memories" },
        { id: "s8", name: "Quantum Dreams" },
        { id: "s9", name: "The Last Horizon" },
      ] 
    } 
  },
];

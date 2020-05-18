import App from './App'
export default function SearchParams() {
    
    const params = {
    query: {
      status: {
        option: "online",
      },
      name: "Tabula Rasa",
      stats: [
        {
          type: "and",
          filters: [],
        },
      ],
    },
    sort: {
      price: "asc",
    },
  };
  return params;
}

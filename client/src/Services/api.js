

export const fetchDisabilities = async () => {
  const response = await fetch(`/api/disabilities`);

  if (!response.ok) {
    throw new Error("Failed to fetch disabilities");
  }

  return response.json();
};

export const seedData = async () => {
    console.log("hello from seed data")
  const response = await fetch(`/api/disabilities/seed`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to seed data");
  }

  return response.json();
};
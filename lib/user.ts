const mockUsers = [
  {
    email: "test@example.com",
    passwordHash:
      "$2b$10$7QWvZP9PpX3riSb2z/dzO.QjOWeZ8HxC0g3yexF3Ig1Pf9qUIo7wK", // Hash dla "password123"
  },
];

export async function getUserFromDb(email, pwHash) {
  // Symulacja opóźnienia jak w prawdziwej bazie danych
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Szukanie użytkownika w mocku
  const user = mockUsers.find((u) => u.email === email);

  if (!user) {
    return null; // Brak użytkownika
  }

  // Porównanie hashy
  if (user.passwordHash === pwHash) {
    return { email: user.email }; // Zwraca dane użytkownika
  }

  return null; // Błędne hasło
}

export const request = async (animal: string): Promise<{ name: string }[]> => {
  try {
    const responseData = await fetch(
      `https://api.api-ninjas.com/v1/animals?name=${animal}`,
      {
        headers: { "X-Api-Key": "RlH3K9vNsPe47E0Saj37ptVpfA6uYC2qA5y08Eyr" },
      },
    );
    if (!responseData.ok) {
      throw new Error(`HTTP error! status: ${responseData.status}`);
    }
    const response = await responseData.json();
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};

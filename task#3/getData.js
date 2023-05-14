export const getData = async (country) => {
  const url = `http://universities.hipolabs.com/search?country=${country.toLowerCase()}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

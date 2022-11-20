export const getPriceApi = (
  distance: string,
  squareMeters: string,
  extraSquareMeters?: string,
  bulkyItems?: boolean
) => {
  const endPoint = 'https://moveitcaseapi.azurewebsites.net/api/Rate';
  let url = `${endPoint}?distance=${distance}&ordinaryVolume=${squareMeters}`;
  if (extraSquareMeters) {
    url += `&atticVolume=${extraSquareMeters}`;
  }
  if (bulkyItems) {
    url += `&piano=${bulkyItems}`;
  }
  return url;
};

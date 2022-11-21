import { getPriceApi } from './getPriceApi';

export const getPricing = async (
  distance: string,
  squareMeters: string,
  extraSquareMeters?: string,
  bulkyItems?: boolean
) => {
  const url = getPriceApi(
    distance,
    squareMeters,
    extraSquareMeters,
    bulkyItems
  );
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data === 0)
      throw new Error('Something went wrong, please try again later');
    return data;
  } catch (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    return message;
  }
};

export const getDistance = async (
  startAddress: string,
  finalAddress: string
) => {
  const directionService = new google.maps.DirectionsService();

  const results = await directionService.route({
    origin: startAddress,
    destination: finalAddress,
    travelMode: google.maps.TravelMode.DRIVING,
  });

  return {
    distance:
      results.routes?.[0].legs?.[0].distance?.text.split(/(?<=^\S+)\s/)[0],
    duration: results.routes?.[0].legs?.[0].duration?.text,
  };
};

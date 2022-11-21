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
    return data;
  } catch (error) {
    console.log(error);
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
    distance: results.routes?.[0].legs?.[0].distance?.text,
    duration: results.routes?.[0].legs?.[0].duration?.text,
  };
};


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

export const getDistance = async () => {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=AIzaSyDCve4y8-ezYrWvEb0KEawyvuerIsZZUpA`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

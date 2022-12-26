export const saveBookings = async (bookingData) => {
  const url = `${process.env.REACT_APP_API_URL}/bookings`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  const data = await res.json();
  return data;
};

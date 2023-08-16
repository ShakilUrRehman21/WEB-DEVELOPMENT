const roomTypeSelect = document.getElementById('roomType');
const checkAvailabilityButton = document.getElementById('checkAvailability');
const bookingDetails = document.getElementById('bookingDetails');
const billing = document.getElementById('billing');
const confirmBookingButton = document.getElementById('confirmBooking');

checkAvailabilityButton.addEventListener('click', () => {
  const selectedRoomType = roomTypeSelect.value;
  const checkInDate = new Date(document.getElementById('checkInDate').value);
  const checkOutDate = new Date(document.getElementById('checkOutDate').value);
  const numPeople = parseInt(document.getElementById('numPeople').value);
  const advance = parseInt(document.getElementById('advanceamount').value);

  if (!selectedRoomType || !checkInDate || !checkOutDate || isNaN(numPeople) || numPeople < 1) {
    alert('Please fill in all required fields.');
    return;
  }

  // Calculate the number of days of stay
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  const numDays = Math.round((checkOutDate - checkInDate) / oneDay);

  // Calculate room price based on room type, number of days, and number of people
  const roomPrice = calculateRoomPrice(selectedRoomType);
  const totalRoomPrice = roomPrice * numDays * numPeople;
  const totalRoomPrice1 = roomPrice * numDays * numPeople - advance;
  const extra=totalRoomPrice/roomPrice;

  bookingDetails.innerHTML = `
    <p>Check-in: ${checkInDate.toDateString()}</p>
    <p>Check-out: ${checkOutDate.toDateString()}</p>
    <p>Number of People: ${numPeople}</p>
    <p>Number of Days: ${numDays}</p>
  `;

  billing.innerHTML = `<p>Total balance: RS. ${totalRoomPrice}</p>
                      <p>Left balance: RS. ${totalRoomPrice1}</p>
                      <p>Additional charges: RS. ${extra}</p>
  `; 

});
confirmBookingButton.addEventListener('click', () => {
  // Perform booking and payment processing
  // Update billing details and display confirmation
    
    billing.innerHTML += '<p>Booking confirmed. Thank you!</p>';
});

function calculateRoomPrice(roomType) {
  // Calculate room price based on room type
  if (roomType === 'single') {
    return 2000;
  } else if (roomType === 'double') {
    return 4000;
  } else if (roomType === 'luxury') {
    return 7000;
  }else if (roomType === 'elite') {
    return 10000;
  }
}

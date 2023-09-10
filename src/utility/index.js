export function minutesToHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const abbreviatedHours = hours.toString()[0]; // Get the first character of the hours as a string
  const abbreviatedMinutes = remainingMinutes.toString()[0]; // Get the first character of the minutes as a string
  return `${abbreviatedHours}h ${abbreviatedMinutes}m`;
}

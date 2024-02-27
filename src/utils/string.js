export function convertStringToBoolean(input) {
  if (typeof input === "boolean") return input
  return input === "true"
}

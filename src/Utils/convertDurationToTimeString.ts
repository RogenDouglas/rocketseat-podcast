export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const result = [hours, minutes, seconds]
    .map((i) => String(i).padStart(2, "0"))
    .join(":");

  return result;
}

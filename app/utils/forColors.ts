export function hexToRgba(hex: string, opacity: number): string {
  // Remove the hash if it exists
  hex = hex.replace(/^#/, '');

  // Parse the hex values
  const bigint = parseInt(hex, 16);

  // Extract the RGB components
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Validate the input values
  if (
    isNaN(r) ||
    isNaN(g) ||
    isNaN(b) ||
    isNaN(opacity) ||
    opacity < 0 ||
    opacity > 1
  ) {
    return '';
  }

  // Create the RGBA string
  const rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return rgba;
}
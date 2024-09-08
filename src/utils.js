export function distanceEarth(x, y, z) {
  return Math.floor(Math.sqrt(x * x + y * y + z * z));
}
export function calculateDistanceToSun(lat, lon) {
  // Constants
  const AU = 149597870.7; // 1 Astronomical Unit in kilometers (average distance)
  const earthRadius = 6371; // Earth's mean radius in kilometers

  // In this approximation, we assume the distance is nearly constant at 1 AU
  // The effect of latitude, longitude, and altitude is negligible on this scale

  // Return the average distance to the Sun
  return AU + earthRadius; // Adding Earth's radius to account for surface distance
}

export function addCommasToNumber(number) {
  // Convert the number to a string
  let numStr = number.toString();

  // Use a regular expression to add commas
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function calculateSEVAngle(q0, q1, q2, q3) {
  // Convert quaternion to rotation matrix
  const r11 = 1 - 2 * (q2 * q2 + q3 * q3);
  const r12 = 2 * (q1 * q2 - q3 * q0);
  const r13 = 2 * (q1 * q3 + q2 * q0);
  const r21 = 2 * (q1 * q2 + q3 * q0);
  const r22 = 1 - 2 * (q1 * q1 + q3 * q3);
  const r23 = 2 * (q2 * q3 - q1 * q0);
  const r31 = 2 * (q1 * q3 - q2 * q0);
  const r32 = 2 * (q2 * q3 + q1 * q0);
  const r33 = 1 - 2 * (q1 * q1 + q2 * q2);

  // Assuming the Sun vector in the inertial frame is along the x-axis (1, 0, 0)
  const sunVector = { x: 1, y: 0, z: 0 };

  // Transform the Sun vector to the body-fixed frame using the rotation matrix
  const sunVectorTransformed = {
    x: r11 * sunVector.x + r12 * sunVector.y + r13 * sunVector.z,
    y: r21 * sunVector.x + r22 * sunVector.y + r23 * sunVector.z,
    z: r31 * sunVector.x + r32 * sunVector.y + r33 * sunVector.z,
  };

  // Calculate the angle between the transformed Sun vector and the z-axis (0, 0, 1)
  const sevAngle = Math.acos(
    sunVectorTransformed.z /
      Math.sqrt(
        sunVectorTransformed.x * sunVectorTransformed.x +
          sunVectorTransformed.y * sunVectorTransformed.y +
          sunVectorTransformed.z * sunVectorTransformed.z
      )
  );

  // Convert the angle to degrees
  return sevAngle * (180 / Math.PI);
}

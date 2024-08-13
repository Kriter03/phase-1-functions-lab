function distanceFromHqInBlocks(blockNumber) {
  const hqBlock = 42;
  return Math.abs(blockNumber - hqBlock);
}
function distanceFromHqInFeet(blockNumber) {
  const hqBlock = 42;
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(blockNumber - hqBlock);
  return distanceInBlocks * feetPerBlock;
}
function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  return distanceInBlocks * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(destination - start);
  const distanceInFeet = distanceInBlocks * feetPerBlock;

  if (distanceInFeet > 2500) {
    return 'cannot travel that far';
  } else if (distanceInFeet > 2000) {
    return 25;
  } else if (distanceInFeet > 400) {
    const extraDistance = distanceInFeet - 400;
    return (extraDistance * 0.02); // 2 cents per foot
  } else {
    return 0; // Free for the first 400 feet
  }
}
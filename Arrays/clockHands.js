/* Create a function that takes the number of seconds since 12:00:00 and returns the angles (in degrees) of the hour, minute, and second hands assuming 360 degrees in a full arc and that 12:00:00 is 0 degrees for all hands. */

// My strategy here is simply to calculate the arc segments of each hand, assuming that they all move at continuous, constant rates.  I plan to use an array to return the angles.  There are 60 seconds in a full 360 degree arc, meaning that each second is 6 degrees of movement (360/60) for the second hand.  There are 60 minutes in 360 degrees meaning 6 degrees for each minute (360/60) and each second is 1/60th so the minute hand moves 6 degrees / 60 seconds = 1/10th of a degree per second.  Lastly, there are 12 hours in 360 degrees meaning 30 degrees for each hour (360/12), and 60 minutes per hour so each minute is 30 / 60 = 1/2 a degree per minute, and finally there are 60 seconds in a minute, so each second is 1/120th of a degree for the hour hand.

// I'll assume there's no need to trim or round either the input or output.

function clockHands(seconds) {
  if (typeof seconds !== 'number') {return 'Please input a number.'};
  seconds = seconds % (60 * 60 * 12);
// convert negative inputs to their complements; faster to convert here than to compute and convert in the array. note: may not be necessary as wording in problem is "... seconds SINCE 12:00:00," but it does not expressly exclude a negative interval to 12:00:00.
  if (seconds < 0) {
    seconds += (60 * 60 * 12);
  };
  let angles = [(1/120), (1/10), (6)];
  for (let i = 0; i < angles.length; i++) {
    angles[i] = (angles[i] * seconds) % 360 ;
  };
  return angles;
};

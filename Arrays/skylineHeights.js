/* You are given an array with heights of consecutive buildings in a city.  For example [-1, 7, 3] represents 3 buildings: one below street level, one 7-story building, and one 3-story building.  You are viewing these buildings from street level.  From your perspective, you cannot see the 3rd building because it is hidden behind the 3-story building.  Return an array containing heights of the buildings you can see, in order.  So given [1, -1, 7, 3] return [1, 7] */

// I'll assume the gist of this problem is only to return strictly increasing elements from the array.  Real life concerns such as the width of buildings potentially allowing us to view the sides of a building even if we cannot see the top (depending on how close we are to the first building that obstructs our view), or the length of buildings potentially occluding our ability to see a taller building farther in the sequence (again depending on our viewing angle, based on our proximity to the buildings), I'll dismiss as being outside the spirit of the problem.  Additionally, I'll disregard a monotonically increasing array as I believe the spirit of the problem focuses mainly on the increasing heights of the buildings.  If we wanted to allow a monotonically increasing sequence, we could just change our conditional to >= rather than >.

// I'm assuming I'm passed a non-empty array of numerical values, I'll return a new array, and we can always see the first building.

function incrFilter(array) {
  let visible = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > visible[visible.length - 1]) {
      visible.push(array[i])
    };
  };
  return visible;
};

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2302-ACC-ET-PT-B";
// Use the APIURL variable for fetch requests
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    const result = await response.json();
    console.log(result.data.players);
    return result.data.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`);
    const result = await response.json();
    // console.log(result);
    return result.data.player;
  } catch (error) {}
};

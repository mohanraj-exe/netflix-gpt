const aiQueryHelper = (searchText) => {
  return (
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText +
    "only give me names of 5 movies, comma seperated like the example result given ahead." +
    "Example result: Neethane en ponvasantham, Varanam aayiram, Vinnaithani varuvaya, Minnale, Vettaiyadu vilayadu."
  );
};

export default aiQueryHelper;

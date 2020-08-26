const modifyEpisode = (episodeObj) => {
    const { name, air_date, episode, characters, url, id } = episodeObj;
  
    return {
      airDate: air_date,
      name,
      episodeCode: episode,
      id,
      url,
      characters
    };
  };
  
  export const modifyPayload = (response) => {
    const { info, results = [] } = response;
  
    return {
      info,
      results: results.map(modifyEpisode)
    };
  };
  
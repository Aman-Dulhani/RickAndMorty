import { BASE_URL, ENDPOINTS } from "../Utilities/Constants";
import { modifyPayload } from "../Utilities/middleware";

const episodeEndPoint = `${BASE_URL}/${ENDPOINTS.EPISODE}`;

export function fetchEpisodes(pageNo = 1, name = "") {
  return fetch(`${episodeEndPoint}?page=${pageNo}&name=${name}`)
    .then((raw) => raw.json())
    .then(modifyPayload);
}

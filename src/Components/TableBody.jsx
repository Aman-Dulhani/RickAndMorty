import React from "react";
import Episode from "./Episode";

const TableView = ({ episodes }) => {
  return (
    <div>
      <tbody>
        {episodes.length > 0 ? (
          episodes.map((episode) => {
            const { airDate, name, episodeCode, id, url, characters } = episode;
            return (
              <Episode
                name={name}
                key={id}
                episodeCode={episodeCode}
                url={url}
                numberOfCharacters={characters.length}
                airDate={airDate}
                characters
              />
            );
          })
        ) : (
          <tr>
            <td colSpan="4">NO RESULTS</td>
          </tr>
        )}
      </tbody>
    </div>
  );
};

export default TableView;

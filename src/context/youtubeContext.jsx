import { createContext, useEffect, useState } from "react";
import { getData } from "../helpers";
export const YoutubeContext = createContext();

// context'deki verileri bütün uygulamaya sağlar
export const YoutubeProvider = ({ children }) => {
  const [selected, setSelected] = useState({
    name: "Anasayfa",
    type: "home",
  });
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    if (selected.type === "home") {
      // anasayfa videoları
      getData("/home/").then((data) => setVideos(data.contents));
    } else {
      // kategori videoları
      getData(`/search/?q=${selected.name.toLocaleLowerCase()}`).then((data) =>
        setVideos(data)
      );
    }
  }, [selected]);

  return (
    <YoutubeContext.Provider value={{ selected, setSelected, videos }}>
      {children}
    </YoutubeContext.Provider>
  );
};

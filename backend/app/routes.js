const axios = require("axios");

const BASE_API = "https://ws.audioscrobbler.com/2.0";
const USER = "Zelliux";

const getLiveSong = async (req, res) => {
    const url = BASE_API + `?method=user.getrecenttracks&user=${USER}&api_key=${process.env.LASTFM_API_KEY}&format=json`;
    const axiosResponse = await axios.get(url);
    const data = axiosResponse.data;

    if (data === null) res.status(500).send({detail: "cannot get live song"});
    // Get currently playing song
    const tracks = data["recenttracks"].track;
    const nowPlaying = tracks.filter((t) => {
        let attr_ = t["@attr"];
        return attr_ !== undefined ? attr_["nowplaying"] !== undefined : false;
    })[0];
    res.send({nowPlaying});
}

module.exports = {
    getLiveSong
};
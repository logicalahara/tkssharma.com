const axios = require('axios');
const allData = require('./data');
const fs = require('fs');

async function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100)
  })
}
async function fetchDataFromYouTube() {
  const array = [];
  try {
    for (const youtubeList of allData.YouTube) {
      try {
        const {
          id
        } = youtubeList;
        const payload = {};
        payload.key = id;
        await delay();
        const data = await fetchSinglePlaylist(id);
        payload.value = data;
        console.log('data is there with length' + data.length);
        array.push(payload);
      } catch (err) {

      }
    }
    await writeFile(array);
  } catch (err) {
    console.log(err);
  }
}

async function writeFile(data) {
  const payload = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    const file = `masterData.json`;
    return fs.writeFile(file, payload, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

async function fetchSinglePlaylist(id) {
  const {
    data
  } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&maxResults=50&key=KEY`, {
    headers: {
      authorization: `Bearer TOKEN`
    }
  }
  )
  return data.items;
}
fetchDataFromYouTube();
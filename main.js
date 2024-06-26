let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_folder = document.querySelector(".track-folder");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  1.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  2.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  3.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  4.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  5.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  6.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  7.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  8.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  9.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  10.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  11.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  12.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  13.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  14.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  15.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  16.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  17.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  18.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  19.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  20.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  21",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  21.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  22",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  22.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  23",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Abuata/Track  23.mp3",
    "folder": "Abuata"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  1.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  2.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  3.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  4.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  5.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  6.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  7.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  8.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  9.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  10.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  11.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  12.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  13.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  14.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  15.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  16.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  17.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  18.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  19.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Afshari/Track  20.mp3",
    "folder": "Afshari"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  1.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  2.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  3.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  4.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  5.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  6.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  7.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  8.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  9.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  10.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  11.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  12.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  13.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  14.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  15.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  16.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  17.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  18.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  19.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  20.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  21",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  21.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  22",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  22.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  23",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  23.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  24",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  24.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  25",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  25.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  26",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  26.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  27",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  27.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  28",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Esfahan/Track  28.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  1.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  2.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  3.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  4.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  5.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  6.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  7.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  8.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  9.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  10.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  11.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  12.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  13.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  14.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  15.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  16.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  17.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Bayat-e-Tork/Track  18.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  1.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  2.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  3.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  4.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  5.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  6.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  7.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  8.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  9.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  10.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  11.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  12.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  13.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  14.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  15.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  16.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  17.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  18.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  19.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  20.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  21",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  21.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  22",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  22.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  23",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  23.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  24",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  24.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  25",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  25.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  26",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  26.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  27",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  27.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  28",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  28.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  29",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  29.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  30",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  30.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  31",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  31.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  32",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  32.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  33",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  33.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  34",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  34.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  35",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  35.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  36",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  36.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  37",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  37.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  38",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  38.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  39",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  39.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  40",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  40.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  41",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  41.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  42",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  42.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  43",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  43.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  44",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  44.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  45",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  45.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  46",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  46.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  47",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  47.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  48",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  48.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  49",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  49.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  50",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  50.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  51",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  51.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  52",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  52.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  53",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  53.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  54",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  54.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  55",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  55.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  56",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  56.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  57",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  57.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  58",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  58.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  59",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  59.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  60",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  60.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  61",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  61.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  62",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  62.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  63",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  63.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  64",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  64.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  65",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  65.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  66",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  66.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  67",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  67.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  68",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  68.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  69",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Chahargah/Track  69.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  1.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  2.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  3.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  4.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  5.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  6.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  7.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  8.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  9.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  10.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  11.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  12.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  13.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  14.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  15.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  16.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  17.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  18.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  19.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  20.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  21",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Dashti/Track  21.mp3",
    "folder": "Dashti"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  1.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  2.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  3.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  4.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  5.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  6.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  7.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  8.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  9.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  10.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  11.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  12.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  13.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  14.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  15.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  16.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  17.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  18.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  19.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  20.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  21",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  21.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  22",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  22.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  23",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  23.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  24",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  24.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  25",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  25.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  26",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  26.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  27",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  27.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  28",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  28.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  29",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  29.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  30",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  30.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  31",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  31.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  32",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  32.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  33",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  33.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  34",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  34.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  35",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  35.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  36",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  36.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  37",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  37.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  38",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  38.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  39",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  39.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  40",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  40.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  41",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  41.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  42",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  42.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  43",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  43.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  44",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  44.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  45",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  45.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  46",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  46.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  47",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  47.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  48",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  48.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  49",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  49.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  50",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  50.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  51",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Homayoun/Track  51.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  1.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  2.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  3.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  4.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  5.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  6.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  7.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  8.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  9.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  10.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  11.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  12.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  13.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  14.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  15.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  16.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  17.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  18.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  19.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  20.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  21",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  21.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  22",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  22.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  23",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  23.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  24",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  24.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  25",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  25.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  26",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  26.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  27",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  27.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  28",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  28.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  29",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  29.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  30",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  30.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  31",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  31.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  32",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  32.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  33",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  33.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  34",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  34.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  35",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  35.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  36",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  36.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  37",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  37.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  38",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  38.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  39",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  39.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  40",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  40.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  41",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  41.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  42",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  42.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  43",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  43.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  44",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  44.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  45",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  45.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  46",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  46.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  47",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  47.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  48",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  48.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  49",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  49.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  50",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  50.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  51",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  51.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  52",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  52.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  53",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  53.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  54",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  54.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  55",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  55.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  56",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  56.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  57",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  57.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  58",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  58.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  59",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Mahoor/Track  59.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  1.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  2.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  3.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  4.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  5.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  6.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  7.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  8.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  9.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  10.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  11.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  12.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  13.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  14.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  15.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  16.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  17.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  18.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  19.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  20.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  21",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  21.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  22",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  22.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  23",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  23.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  24",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  24.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  25",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  25.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  26",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  26.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  27",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  27.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  28",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  28.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  29",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  29.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  30",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  30.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  31",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  31.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  32",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  32.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  33",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  33.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  34",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  34.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  35",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  35.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  36",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Nava/Track  36.mp3",
    "folder": "Nava"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  1.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  2.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  3.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  4.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  5.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  6.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  7.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  8.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  9.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  10.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  11.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  12.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  13.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  14.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  15.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  16.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  17.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  18.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  19.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  20.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  21",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  21.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  22",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  22.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  23",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  23.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  24",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  24.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  25",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  25.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  26",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  26.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  27",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  27.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  28",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  28.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  29",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  29.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  30",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  30.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  31",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  31.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  32",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  32.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  33",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  33.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  34",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  34.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  35",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  35.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  36",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  36.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  37",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  37.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  38",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  38.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  39",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  39.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  40",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  40.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  41",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  41.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  42",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  42.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  43",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  43.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  44",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  44.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  45",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  45.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  46",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  46.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  47",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  47.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  48",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Rast-Panjgah/Track  48.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  1.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  2.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  3.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  4.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  5.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  6.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  7.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  8.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  9.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  10.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  11.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  12.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  13.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  14.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  15.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  16.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  17.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  18.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  19.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  20.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  21",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  21.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  22",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  22.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  23",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  23.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  24",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  24.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  25",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  25.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  26",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  26.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  27",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  27.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  28",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  28.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  29",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  29.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  30",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  30.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  31",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  31.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  32",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  32.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  33",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  33.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  34",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  34.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  35",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  35.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  36",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  36.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  37",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  37.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  38",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  38.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  39",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  39.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  40",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Segah/Track  40.mp3",
    "folder": "Segah"
  },
  {
    "name": "Track  1",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  1.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  2",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  2.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  3",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  3.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  4",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  4.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  5",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  5.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  6",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  6.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  7",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  7.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  8",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  8.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  9",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  9.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  10",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  10.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  11",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  11.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  12",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  12.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  13",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  13.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  14",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  14.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  15",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  15.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  16",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  16.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  17",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  17.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  18",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  18.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  19",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  19.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  20",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  20.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  21",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  21.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  22",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  22.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  23",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  23.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  24",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  24.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  25",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  25.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  26",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  26.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  27",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  27.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  28",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  28.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  29",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  29.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  30",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  30.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  31",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  31.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  32",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  32.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  33",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  33.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  34",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  34.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  35",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  35.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  36",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  36.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  37",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  37.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  38",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  38.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  39",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  39.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  40",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  40.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  41",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  41.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  42",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  42.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  43",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  43.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  44",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  44.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  45",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  45.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  46",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  46.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  47",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  47.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  48",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  48.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  49",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  49.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  50",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  50.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  51",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  51.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  52",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  52.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  53",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  53.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  54",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  54.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  55",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  55.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  56",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  56.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  57",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  57.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  58",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  58.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  59",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  59.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  60",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  60.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  61",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  61.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  62",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  62.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  63",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  63.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  64",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  64.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  65",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  65.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  66",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  66.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  67",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  67.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  68",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  68.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  69",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  69.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  70",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  70.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  71",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  71.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  72",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  72.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  73",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  73.mp3",
    "folder": "Shoor"
  },
  {
    "name": "Track  74",
    "artist": "Mohsen Abforoosh",
    "image": "Tar - Maroofi/tar.jpg",
    "path": "Tar - Maroofi/Shoor/Track  74.mp3",
    "folder": "Shoor"
  }
];


function random_bg_color() {

  // Get a number between 128 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 128;
  let green = Math.floor(Math.random() * 256) + 128;
  let blue = Math.floor(Math.random() * 256) + 128;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url('" + track_list[track_index].image + "')";
  track_name.textContent = track_list[track_index].name;
  track_folder.textContent = track_list[track_index].folder;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "Playing " + (track_index + 1) + " of " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  //random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}


function createScrollableList() {
  const trackListContainer = document.getElementById('trackList');
  const folders = {};

  track_list.forEach((track, index) => {
    if (!folders[track.folder]) {
      folders[track.folder] = true;

      const folderItem = document.createElement('div');
      folderItem.textContent = track.folder;
      folderItem.classList.add('listItem', 'folderName');
      trackListContainer.appendChild(folderItem);
    }

    const trackItem = document.createElement('div');
    const spaces = '\xa0'.repeat(4); //'\xa0'.repeat(track.folder.length); // '\xa0' is a non-breaking space
    trackItem.textContent = `${spaces} ${track.name}`;
    trackItem.classList.add('listItem', 'trackItem');
    trackItem.addEventListener('click', function() {
      track_index = index;
      loadTrack(track_index);
      playTrack();
      highlightTrack(track_index);
    });

    trackListContainer.appendChild(trackItem);
  });
}


function highlightTrack(index) {
  const trackItems = document.querySelectorAll('.trackItem');
  trackItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('activeTrack'); // Apply a class to highlight the active track
    } else {
      item.classList.remove('activeTrack'); // Remove the class from other tracks
    }
  });
}



// Call the function to generate the scrollable list
createScrollableList();



// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  highlightTrack(track_index);
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
  highlightTrack(track_index);
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
  highlightTrack(track_index);
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


// Exercise 16: Playlist Management
// Create a music playlist management system using a Map. 
// Store playlist names as keys and arrays of song titles as values. 
// Implement functions to add songs to playlists, remove songs, and shuffle songs within a playlist.

class PlaylistManager {
  constructor() {
    this.playlists = new Map();
  }

  addSongToPlaylist(playlistName, songTitle) {
    if (this.playlists.has(playlistName)) {
      this.playlists.get(playlistName).push(songTitle);
    } else {
      this.playlists.set(playlistName, [songTitle]);
    }
  }

  removeSongFromPlaylist(playlistName, songTitle) {
    if (this.playlists.has(playlistName)) {
      const playlist = this.playlists.get(playlistName);
      const index = playlist.indexOf(songTitle);
      if (index !== -1) {
        playlist.splice(index, 1);
        console.log(`Song '${songTitle}' removed from playlist '${playlistName}'.`);
      } else {
        console.log(`Song '${songTitle}' not found in playlist '${playlistName}'.`);
      }
    } else {
      console.log(`Playlist '${playlistName}' not found.`);
    }
  }

  shufflePlaylist(playlistName) {
    if (this.playlists.has(playlistName)) {
      const playlist = this.playlists.get(playlistName);
      for (let i = playlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [playlist[i], playlist[j]] = [playlist[j], playlist[i]]; // Swap elements
      }
      console.log(`Playlist '${playlistName}' shuffled.`);
    } else {
      console.log(`Playlist '${playlistName}' not found.`);
    }
  }

  displayPlaylist(playlistName) {
    if (this.playlists.has(playlistName)) {
      console.log(`Playlist '${playlistName}':`);
      this.playlists.get(playlistName).forEach((song, index) => {
        console.log(`${index + 1}. ${song}`);
      });
    } else {
      console.log(`Playlist '${playlistName}' not found.`);
    }
  }
}

const playlistManager = new PlaylistManager();

playlistManager.addSongToPlaylist("Favorites", "Song A");
playlistManager.addSongToPlaylist("Favorites", "Song B");
playlistManager.addSongToPlaylist("Party Mix", "Party Song");
playlistManager.addSongToPlaylist("Party Mix", "Dance Song");

playlistManager.displayPlaylist("Favorites");
playlistManager.displayPlaylist("Party Mix");

playlistManager.shufflePlaylist("Favorites");
playlistManager.displayPlaylist("Favorites");

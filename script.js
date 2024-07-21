document.addEventListener("DOMContentLoaded", function () {
    const appId = ''; // Remplacez par votre App ID
    const redirectUri = ''; // Remplacez par l'URL de votre serveur

    DZ.init({
        appId: appId,
        channelUrl: redirectUri + 'channel.html',
    });

    document.getElementById('login-btn').addEventListener('click', function () {
        DZ.login(function (response) {
            if (response.authResponse) {
                getCurrentTrack();
                DZ.Event.subscribe('player_position', updateProgress);
                document.getElementById('player').style.display = 'block';
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, { perms: 'basic_access,manage_library,offline_access' });
    });

    function getCurrentTrack() {
        DZ.player.getCurrentTrack(function (track) {
            if (track) {
                document.getElementById('track-title').innerText = track.title;
                document.getElementById('artist-name').innerText = track.artist.name;
                document.getElementById('album-cover').src = track.album.cover_medium;
                document.getElementById('total-time').innerText = formatTime(track.duration);
            }
        });
    }

    function updateProgress(position) {
        const currentTime = position[0];
        const trackDuration = DZ.player.getDuration();
        document.getElementById('current-time').innerText = formatTime(currentTime);
        const progress = (currentTime / trackDuration) * 100;
        document.getElementById('progress-bar').value = progress;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});

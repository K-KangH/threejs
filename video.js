// 2. This code loads the IFrame Player API code asynchronously.
// api를 비동기로 로드함
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 플레이어생성

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        playerVars: {
            rel: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: WqNBIkFOoE4,
        },
    });
}

// 4. The API will call this function when the video player is ready.
// 재생준비가 완료되면 재생
// function onPlayerReady(event) {
//     event.target.playVideo();
// }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

var play = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function playVideo() {
    youtubePlayer.playVideo(); //재생
}
function stopVideo() {
    player.stopVideo(); //일시정지
}

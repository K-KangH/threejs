gsap.registerPlugin(ScrollTrigger);

let player;

// YouTube 플레이어 API 로드 후 호출될 콜백 함수
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'WqNBIkFOoE4', // 재생할 YouTube 비디오 ID
        playerVars: {
            rel: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: 'WqNBIkFOoE4', // 반복 재생할 경우 필요한 플레이리스트 ID
        },
        events: {
            onReady: onPlayerReady, // 플레이어 준비 완료 시 호출될 콜백 함수
        },
    });
}

// YouTube 플레이어 준비 완료 시 호출될 콜백 함수
function onPlayerReady(event) {
    console.log('YouTube Player Ready');
}
ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: Isvideovisible,
});
let yt = document.querySelector('.video-container');
//스크롤이 작동할때마다 실행될 함수
function Isvideovisible() {
    if (
        ScrollTrigger.positionInViewport(yt, 'center').toFixed(2) < 1 &&
        ScrollTrigger.positionInViewport(yt, 'center').toFixed(2) > 0.3
    ) {
        //console.log(ScrollTrigger.isInViewport(yt));
        console.log(ScrollTrigger.positionInViewport(yt, 'center').toFixed(2));
        player.mute();
        player.playVideo();
    } else {
        //console.log(ScrollTrigger.isInViewport(yt));
        console.log(ScrollTrigger.positionInViewport(yt, 'center').toFixed(2));
        player.pauseVideo();
    }
}
Isvideovisible();
// function Isvideovisible() {
//     player.mute();
//     player.playVideo();
//     console.log('nowscrolling');
// }

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
            videoId: 'WqNBIkFOoE4',
        },
    });
}

//4. The API will call this function when the video player is ready.
//재생준비가 완료되면 재생
function onPlayerReady(event) {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                    console.log('Player is 20% visible, starting video.');
                    event.target.playVideo(); // 동영상 재생
                } else {
                    console.log('Player is less than 20% visible, stopping video.');
                    event.target.pauseVideo(); // 동영상 일시 정지
                }
            });
        },
        {
            threshold: [0.5], // 20% 이상의 가시성 비율을 설정
        }
    );

    const target = document.querySelector('player');
    observer.observe(target);
}

var isVisible = false;

$(window).on('scroll', function () {
    if (checkVisible($('.youtube')) && !isVisible) {
        console.log('Visible!!!');
        isVisible = true;
        playVideo();
    } else if (!checkVisible($('.youtube')) && isVisible) {
        console.log('hidden!!!');
        isVisible = false;
        stopVideo();
    }
});

function playVideo() {
    player.playVideo(); //재생
}
function stopVideo() {
    player.stopVideo(); //일시정지
}

//체크할 element(ex:div span.. 등등)들이 브라우저에 나타날때를 체크하는 함수
function checkVisible(elm, eval) {
    eval = eval || 'object visible';
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == 'object visible') return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;
    if (eval == 'above') return y < viewportHeight + scrolltop;
}

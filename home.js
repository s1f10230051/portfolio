const slider = document.querySelector('.image-slider');

// ユーザーがスクロール中はアニメーションを停止
let isScrolling = false;

slider.addEventListener('scroll', () => {
  isScrolling = true;
  clearTimeout(scrollTimeout);
  const scrollTimeout = setTimeout(() => {
    isScrolling = false; // ユーザーのスクロールが停止したらアニメーション再開
  }, 300);
});

// 自動スライド
function autoSlide() {
  if (!isScrolling) {
    const sliderWidth = slider.offsetWidth;
    const currentScroll = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - sliderWidth;

    if (currentScroll >= maxScroll) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: sliderWidth, behavior: 'smooth' });
    }
  }
}

// 5秒ごとに自動スライド
setInterval(autoSlide, 5000);




window.addEventListener('load', () => {
  const intro = document.querySelector('.intro');
  const header = document.querySelector('.fixed-header');
  const body = document.body;
  const slideInBox = document.querySelector('.slide-in-box');

  // イントロ中はスクロールを無効化する
  body.style.overflow = 'hidden';
  header.style.zIndex = '0'; // ヘッダーを後ろに送る

  setTimeout(() => {
    // イントロ画面をフェードアウト
    intro.style.transition = 'opacity 1s ease';
    intro.style.opacity = '0';

    intro.addEventListener('transitionend', () => {
      // フェードアウト後、イントロ画面を非表示
      intro.style.display = 'none';
      body.style.overflow = ''; // スクロールを再有効化
      header.style.zIndex = '1000'; // ヘッダーを前面に戻す

      // slide-in-boxのアニメーションを開始
      slideInBox.classList.add('slide-in');
    }, { once: true }); // イベントリスナーを一度だけ実行
  }, 3000); // イントロの表示時間
});



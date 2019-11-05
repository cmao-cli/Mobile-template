export function setHtmlFont() {
  const docEl = document.documentElement;
  const dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (16) + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();

  function setRemUnit () {
    let rem = 16;
    rem = docEl!.offsetWidth / 1920 * 100;
    rem = rem > 87 ? 87 : rem;
    docEl!.style.fontSize = rem + 'px';
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });
}
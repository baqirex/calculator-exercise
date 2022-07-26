export default function parseElement(el) {
  let n = 0;
  if (typeof el === 'string') {
    n = parseInt(el);
    n = 'NaN' === String(n) ? 0 : n;
  }
  if (typeof el === 'number' && 'NaN' != String(el)) {
    n = el;
  }
  return n;
}

export function slide_in_left({
  timeline,
  delay,
  nodes,
  duration = 0.3,
  ease,
  stagger = 0,
}) {
  nodes.forEach((el) => {
    el?.classList?.add('animate__faster');
    el?.classList?.add('animate__animated');
    el?.classList?.add('animate__slideInLeft');
  });
}

export default slide_in_left;

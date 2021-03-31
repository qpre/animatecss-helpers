export function slide_in_down({
  timeline,
  delay,
  nodes,
  duration = 0.3,
  stagger = 0,
}) {
  nodes.forEach((el) => {
    el?.classList?.add('animate__faster');
    el?.classList?.add('animate__animated');
    el?.classList?.add('animate__slideInDown');
  });
}

export default slide_in_down;
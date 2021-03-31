export function fade_out_down({
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
    el?.classList?.add('animate__fadeOutDown');
  });
}

export default fade_out_down;

export function fade_out_up({
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
    el?.classList?.add('animate__fadeOutUp');
  });
}

export default fade_out_up;
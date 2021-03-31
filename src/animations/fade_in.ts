export function fade_in({ delay, nodes, duration = 0.3 }) {
  nodes.forEach((el) => {
    el?.classList?.add('animate__faster');
    el?.classList?.add('animate__animated');
    el?.classList?.add('animate__fadeIn');
  });
}

export default fade_in;

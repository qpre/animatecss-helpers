import { apply_animation } from "../utilities/apply_animation";

export function zoom_out_forward({
  delay,
  nodes,
  duration = 0.3,
  ease,
  stagger = 0,
}) {
  return apply_animation({ animation_class: 'animate__zoomOutForward', nodes, delay, duration, stagger });
}

export default zoom_out_forward;

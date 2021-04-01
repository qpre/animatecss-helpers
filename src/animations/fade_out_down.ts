import { apply_animation } from "../utilities/apply_animation";

export function fade_out_down({
  delay,
  nodes,
  duration = 0.3,
  ease,
  stagger = 0,
}) {
  return apply_animation({ animation_class: 'animate__fadeOutDown', nodes, delay, duration, stagger });
}

export default fade_out_down;

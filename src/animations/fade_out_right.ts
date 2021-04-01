import { apply_animation } from "../utilities/apply_animation";

export function fade_out_right({
  delay,
  nodes,
  duration = 0.3,
  ease,
  stagger = 0,
}) {
  return apply_animation({ animation_class: 'animate__fadeOutRight', nodes, delay, duration, stagger });
}

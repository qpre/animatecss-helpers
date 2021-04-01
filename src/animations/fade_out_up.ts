import { apply_animation } from "../utilities/apply_animation";

export function fade_out_up({
  delay,
  nodes,
  duration = 0.3,
  ease,
  stagger = 0,
}) {
  return apply_animation({ animation_class: 'animate__fadeOutUp', nodes, delay, duration, stagger });
}


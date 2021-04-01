import { apply_animation } from "../utilities/apply_animation";

export function fade_in_left({
  delay,
  nodes,
  duration = 0.3,
  ease,
  stagger = 0,
}) {
  return apply_animation({ animation_class: 'animate__fadeInLeft', nodes, delay, duration, stagger });
}

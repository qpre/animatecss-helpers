import { apply_animation } from "../utilities/apply_animation";

export function fade_in({ delay, nodes, duration = 0.3, stagger }) {
  return apply_animation({ animation_class: 'animate__fadeIn', nodes, delay, duration, stagger });
}

import { apply_animation } from "../utilities/apply_animation";

export function fade_out({ delay, nodes, duration, stagger }) {
  return apply_animation({ animation_class: 'animate__fadeOut', nodes, delay, duration, stagger });
}


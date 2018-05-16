import { computed } from "mobx";
import { store } from "../index";

export const dogHi = computed(() => {
  if (!store) return 'fuck'
  return (store.voice + "! My name is " + store.animalCount)
});
export const dogHiTxt = dogHi.observe(change => console.log(change.newValue));

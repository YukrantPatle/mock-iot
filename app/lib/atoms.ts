import { atom, atomFamily } from "recoil";

export const statusAtom = atom({
    key: 'statusAtom',
    default: 'off'
})

export const colorAtom = atom({
    key: 'colorAtom',
    default: ''
})

export const intensityAtom = atom({
    key: 'intensityAtom',
    default: 0
})

export const countState = atom({
    key: "countState",
    default: 0
});

import { selector } from "recoil";
import { countState } from "./atoms";

export const incrementCountState = selector({
    key: "incrementCountState",
    get: ({ get }) => {
        return get(countState) + 1;
    }
});

export const decrementCountState = selector({
    key: "decrementCountState",
    get: ({ get }) => {
        return get(countState) - 1;
    }
});
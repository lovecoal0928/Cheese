import { atom} from "recoil";
//tab色
export const routeHistoryState = atom<string[]>({
    key: "tab",
    default: ["",""]
});

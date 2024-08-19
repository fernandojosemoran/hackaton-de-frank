import { configureStore } from "@reduxjs/toolkit";


export interface AppStore {
    //   user: UserInfo;
}

export default configureStore<AppStore>({
    reducer: {
        // user: userSlice,
    },
});

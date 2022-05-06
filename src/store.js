import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./features/modeSlice";
import dataReducer from "./features/dataSlice"
import { logger } from "./features/middleware";

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        data: dataReducer
    },
    middleware: [logger]
})
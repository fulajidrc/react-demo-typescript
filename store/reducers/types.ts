import { AuthState, ConfigState } from "@/interfaces";

export interface RootState {
    config: ConfigState;
    auth:AuthState
}
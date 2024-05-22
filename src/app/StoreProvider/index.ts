import { createReduxStore, AppDispatch } from 'app/StoreProvider/config/store';
import { StoreProvider } from 'app/StoreProvider/ui/StoreProvider';
import type {
    StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from 'app/StoreProvider/config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
};

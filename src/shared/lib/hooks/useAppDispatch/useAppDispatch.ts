import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();

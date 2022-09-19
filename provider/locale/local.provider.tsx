import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import { createContext, ReactNode } from 'react';

import { LocaleContext } from './locale.type';

const LocalContext = createContext<LocaleContext | null>(null);

type LocalProviderProps = {
  children: ReactNode;
};

export const LocaleProvider = ({ children }: LocalProviderProps) => {
  dayjs.extend(localizedFormat);
  dayjs.extend(updateLocale);
  dayjs.locale('ko');

  return <LocalContext.Provider value={null}>{children}</LocalContext.Provider>;
};

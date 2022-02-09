import { createLogger } from 'redux-logger';

export const loggerMiddleware = createLogger({
  collapsed: true,
  duration: true,
  colors: {
    title: ({ type }) => {
      if (type.endsWith('_SUCCESSFULLY')) {
        return '#00ad34';
      } if (type.endsWith('_FAILURE')) {
        return '#ff5454';
      } if (type.includes('FETCH_')) {
        return '#7dafff';
      }
      return 'inherit';
    },
    prevState : () => '#9E9E9E',
    action    : () => '#03A9F4',
    nextState : () => '#4CAF50',
    error     : () => '#F20404',
  },
});

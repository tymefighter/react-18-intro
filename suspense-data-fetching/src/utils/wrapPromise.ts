interface Resource<T> {
  read: () => T;
};

const PROMISE_STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR'
} as const;

type PromiseStatus = typeof PROMISE_STATUS[keyof typeof PROMISE_STATUS];

export const wrapPromise = <T>(promise: Promise<T>): Resource<T> => {
  let status: PromiseStatus = PROMISE_STATUS.LOADING;
  let result: T;
  let error: Error | undefined

  const suspendPromise = promise.then(
    (_result: T): void => {
      result = _result;
      status = PROMISE_STATUS.LOADED
    },
    (_error: Error): void => {
      error = _error;
      status = PROMISE_STATUS.ERROR
    }
  )

  const resource = {
    read: () => {
      if(status === PROMISE_STATUS.LOADING) {
        throw suspendPromise;
      }
      
      if(status === PROMISE_STATUS.ERROR) {
        throw error
      }

      return result;
    }
  };

  return resource;
}

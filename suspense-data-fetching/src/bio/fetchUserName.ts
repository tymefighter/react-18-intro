const USER_NAME = 'Clone Dreg Tree';

export const fetchUserName = (userId: string) => new Promise<string>(resolve => {
  setTimeout(() => {
    resolve(USER_NAME);
  }, 500)
});

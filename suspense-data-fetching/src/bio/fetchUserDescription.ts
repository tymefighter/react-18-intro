const USER_DESCRIPTION = 
`
  I am Clone Dreg Tree, member of the Clone Commando Squad H-37. 
  We are a team of 7 and our leader is Clone Leader Abtret Mint.
  I had joined the republic since I was cloned on planet Raedrib
  with advanced cloning technology, which was developed by the
  the inhabitants of planet Raedrib.
`

export const fetchUserDescription = (userId: string) => new Promise<string>(resolve => {
  setTimeout(() => {
    resolve(USER_DESCRIPTION);
  }, 700)
});

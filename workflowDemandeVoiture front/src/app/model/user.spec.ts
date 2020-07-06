import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    let user:User = new User;
    user.cin="111";
    user.id=1;
    user.nom="hedi";
    user.password="aaa"
    expect(user).toBeTruthy();

  });
});

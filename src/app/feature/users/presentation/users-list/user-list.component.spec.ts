import { User } from '../../domain/user';
import { UserRepository } from '../../domain/user.repository';
import { UsersListComponent } from './users-list.component';

describe('@UsersListComponent', () => {
  let component: UsersListComponent;
  let userRepositoryMock: jasmine.SpyObj<UserRepository>;

  beforeEach(() => {
    userRepositoryMock = jasmine.createSpyObj<UserRepository>('UserRepository', ['findAll']);
    component = new UsersListComponent(userRepositoryMock);
  });

  describe('when the ngOnInit is called', () => {
    it('#should call the findAll method', () => {
      // Arrange
      const spy = spyOn(component, 'findAll');
      // Act
      component.ngOnInit();
      // Assert
      expect(spy).toHaveBeenCalled();
    });

    it('#should get the users list', async () => {
      // Arrange
      const usersMock: User[] = [{ id: 1, name: 'alex', email: 'alex@gmail.com', }];
      userRepositoryMock.findAll.and.returnValue(Promise.resolve(usersMock));
      // Act
      component.findAll();
      // Assert
      expect(await component.users).toEqual(usersMock);
    });
  });
});

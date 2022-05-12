import UserSerivce from "./UserService";

let User = {
  userId: 157,

  userPassword: "Tap1234",

  userName: "Venu",

  role: "Administrator",
};

test("Testing login user funciton.", async () => {
  let service = new UserSerivce();

  await service.loginService(User).then((result) => {
    let user = result.data;

    expect(user).toBe("Administrator");
  });
});
test("Testing find user by id funciton.", async () => {
  let service = new UserSerivce();

  await service.findUserById(157).then((result) => {
    let user = result.data;

    expect(user.userName).toBe("Venu");
  });
});
test("Testing view all user funciton.", async () => {
  let service = new UserSerivce();

  await service.viewUser().then((result) => {
    let user = result.data;

    expect(user).toBe(user);
  });
});

test("Testing update user funciton.", async () => {
  let service = new UserSerivce();

  await service.updateUser(User).then((result) => {
    let user = result.data;

    expect(user).toBe("user is updated successfully");
  });
});

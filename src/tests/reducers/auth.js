import authReducer from '../../reducers/auth';

test('should generate valid state', () => {
  const state = authReducer({}, {
    type: 'LOGIN',
    uid: '123'
  });
  expect(state).toEqual('123');
});
test('should generate valid state', () => {
  const state = authReducer({ uid: '123' }, {
    type: 'LOGOUT'
  });
  expect(state).toEqual({});
});

import { post } from '../utils/request';

export function shoppingWZ() {
  return { data: ['天猫', '京东', '苏宁'] };
}
// export function shoppingWZ2() {
//   return request(`/mock/shopping`);
// }

export function create(values) {
  return post('/api/users', {
    body: JSON.stringify(values),
  });
}

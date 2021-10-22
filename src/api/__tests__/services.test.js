import { getUser, getRepositories, getStarredRepositories} from '../user';

it('Should return user PedroSoaresCC', async () => {
  let user = await getUser('PedroSoaresCC');
  expect(user.login).toEqual('PedroSoaresCC');
});

it('Should return 6 repositories', async () => {
  let repositories = await getRepositories('PedroSoaresCC');
  expect(repositories.length).toEqual(6);
});

it('Should return 2 starred repositories', async () => {
  let starredRepositories = await getStarredRepositories('PedroSoaresCC');
  expect(starredRepositories.length).toEqual(2);
});
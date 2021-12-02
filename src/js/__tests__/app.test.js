import GameSavingLoader from '../loader';
import GameSaving from '../gameSaving';

test('should check loader correctly', () => {
  const character = new GameSaving('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');

  GameSavingLoader.load().then((result) => {
    expect(result).toEqual(character);
  });
});

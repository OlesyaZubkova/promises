import GameSavingLoader from './loader';

GameSavingLoader.load().then((saving) => saving, (error) => new Error(error));

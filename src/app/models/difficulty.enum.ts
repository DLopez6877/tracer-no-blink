import APP_SETTINGS from '../app_settings';

export enum Difficulty {
    EASY = 800,
    NORMAL = APP_SETTINGS.defaults.difficulty,
    HARD = 500,
    EXPERT = 400,
    INSANITY = 200
}

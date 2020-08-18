import APP_SETTINGS from '../app_settings';

export enum Difficulty {
    EASY = 650,
    NORMAL = APP_SETTINGS.defaults.difficulty,
    HARD = 500,
    EXPERT = 450,
    INSANITY = 300
}

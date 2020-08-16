import { CrosshairType } from './crosshair-type.enum';
import { Difficulty } from './difficulty.enum';

export interface Game {
    numberOfTracers: number,
    difficulty: Difficulty,
    score: number,
    crosshairType: CrosshairType,
    timeStarted: number
}

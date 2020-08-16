import { CrosshairType } from "./crosshair-type.enum";
import { Difficulty } from './difficulty.enum';

export interface GameSettings {
    numberOfTracers?: number,
    difficulty?: Difficulty,
    crosshairType?: CrosshairType
}

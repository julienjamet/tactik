/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactNode } from "react";
/****************************************************/

/*****************************************INTERFACES*/

/****************************************************/
/************************************************************************/


/****************************************************************MATRICE*/
export const Plateau: FC = () => {
    /****************************************MIDDLEWARES*/
    let number: number = 1;

    const plateau: number[][] = [];

    for (let i = 0; i < 27; i++) {
        plateau[i] = [];

        for (let j = 0; j < 14; j++) {
            plateau[i][j] = number;

            number++;
        }
    }

    // USED PLACES
    const used: number[] = [
        2, 3, 4, 5, 6, 7, 11, 12, 13,
        29, 35, 39, 42,
        57, 60, 63, 64, 65, 66, 67, 70,
        85, 86, 87, 88, 93, 94, 95, 96, 98,
        115, 116, 126,
        143, 144, 154,
        171, 180, 181, 182,
        197, 198, 199, 208,
        225, 235, 236,
        253, 263, 264,
        281, 283, 284, 285, 286, 291, 292, 293, 294,
        309, 312, 313, 314, 315, 316, 319, 322,
        337, 340, 344, 350,
        366, 367, 368, 372, 373, 374, 375, 376, 377
    ];

    // FOUR MARKS
    const fourMarks: number[] = [
        3, 7, 11,
        70,
        85,
        182,
        197,
        294,
        309,
        368, 372, 376
    ];

    // FINAL PLACES
    const finalBlue: number[] = [
        283, 284, 285, 286
    ];
    const finalGreen: number[] = [
        93, 94, 95, 96
    ];
    const finalYellow: number[] = [
        60, 88, 116, 144
    ];
    const finalRed: number[] = [
        235, 263, 291, 319
    ];
    /****************************************************/

    /*****************************************RETURN TSX*/
    return (
        <div className="plateau">
            <ul>
                {plateau.map((line: number[]): ReactNode => (
                    <li className="line">
                        {line.map((div: number): ReactNode => (
                            <div
                                className={
                                    `spot
                                    ${used.includes(div) ? 'used' : ''}
                                    ${fourMarks.includes(div) ? 'four' : ''}
                                    ${finalRed.includes(div) ? 'finalRed' : ''}
                                    ${finalBlue.includes(div) ? 'finalBlue' : ''}
                                    ${finalGreen.includes(div) ? 'finalGreen' : ''}
                                    ${finalYellow.includes(div) ? 'finalYellow' : ''}
                                    ${div === 65 ? 'outGreen' : div === 143 ? 'outYellow' : div === 236 ? 'outRed' : div === 314 ? 'outBlue' : ''}`
                                }
                            >
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
    /****************************************************/
};
/************************************************************************/
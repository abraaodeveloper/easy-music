import React from 'react';
import { Neck, String, Pointer } from '../styleds/ChordElements';

interface NoteInfoInterface {
    cString: number;
    fret: number;
}

interface ChordPropsInterface {
    notesForTuning: string[];
    notes: NoteInfoInterface[];
}

const Chord: React.FC<ChordPropsInterface> =
    ({ notesForTuning, notes }) => {

        return (
            <Neck>
                {
                    notesForTuning.map((item, i) => (
                        <String x={5 + (i * (90/5))} y={0}>

                        </String>
                    ))
                }

            </Neck>
        );
    }

export default Chord;
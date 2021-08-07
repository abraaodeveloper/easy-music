import React from 'react';
import { Neck, String, Pointer } from '../styleds/ChordElements';

import Chord from '../Chord';

const Main: React.FC = () => {

    return (
        <div>
            <Chord
                notes={[
                    { cString: 1, fret: 2 },
                    { cString: 2, fret: 4 }
                ]}
                notesForTuning={[
                    "mi", "la", "re", "sol", "si", "mi",
                ]}
            />

            <Chord
                notes={[
                    { cString: 1, fret: 2 },
                    { cString: 2, fret: 4 }
                ]}
                notesForTuning={[
                    "mi", "la", "re", "sol", "si", "mi",
                ]}
            />
            <Chord
                notes={[
                    { cString: 1, fret: 2 },
                    { cString: 2, fret: 4 }
                ]}
                notesForTuning={[
                    "mi", "la", "re", "sol", "si", "mi",
                ]}
            />
        </div>
    );
}

export default Main;
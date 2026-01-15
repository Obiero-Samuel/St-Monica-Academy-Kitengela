import React, { useState } from 'react';
import Joyride from 'react-joyride';

const steps = [
    {
        target: '.main-header',
        content: 'This is your main navigation header!'
    },
    {
        target: '.main-footer',
        content: 'Here is your footer with copyright info.'
    },
    {
        target: '.animated-btn',
        content: 'Try this animated button!'
    }
];

export default function GuidedTourDemo() {
    const [run, setRun] = useState(true);
    return (
        <Joyride
            steps={steps}
            run={run}
            continuous
            showSkipButton
            showProgress
            styles={{ options: { zIndex: 2000 } }}
        />
    );
}

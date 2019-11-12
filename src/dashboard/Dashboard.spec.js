// Test away
//test if component renders without crashing
//snapshot test
//test toggleLocked is calling setState and changing it from locked to unlocked
//same for toggleClosed
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Dashboard from '../dashboard/Dashboard';
import '@testing-library/jest-dom/extend-expect';


afterEach(cleanup);

//tests if Dashboard is rendering
test("Dashboard is rendering correctly", () => {
    expect(render(<Dashboard/>)).toMatchSnapshot();
});



// Test away!
//test if component renders
//snapshot test
//fire event test to see if toggleLocked and toggleClosed are being called.
//can you test if classes are toggling?

import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import Controls from '../controls/Controls';


afterEach(cleanup);

test('Controls renders correctly', () => {
    expect(render(<Controls/>)).toMatchSnapshot()
});

//tests if buttons rendering
test('Buttons rendering correctly', () => {
    
    const toggleLockMock = jest.isMockFunction(() => !locked);
    const toggleClosedMock = jest.fn(() => !closed);
    const {getByText} = render(<Controls locked={false} closed={false} toggleLock={toggleLockMock} toggleClosed={toggleClosedMock}/>)
    getByText(/lock gate/i);
    getByText(/close gate/i);
})

test('close gate button triggers toggle close', async ()=> {
    const toggleClosedMock = jest.fn();
    const {findByText} = render(
        <Controls toggleClosed={toggleClosedMock} closed={false}/>
    );
    const closeButton = findByText((/close gate/i));
    await fireEvent(closeButton, {target: closeButton});
        
    expect(toggleClosedMock).toHaveBeenCalled();
    expect(toggleClosedMock).toHaveBeenCalledTimes(1);
});

test('Closed button disabled if gate is locked', () => {
    const locked = true;
    const closed = false;
    const toggleLockMock = jest.fn(() => !locked);
    const toggleClosedMock = jest.fn(() => !closed);
    const {getByText} = render(
        <Controls
        locked={locked}
        closed={closed}
        toggleLock={toggleLockMock}
        toggleClosed={toggleClosedMock} />
    )
    expect(getByText(/close gate/i)).
});

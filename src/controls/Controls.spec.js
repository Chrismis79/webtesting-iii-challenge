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

// test('close gate button triggers toggle close', async ()=> {
//     const toggleClosedMock = jest.fn();
//     const {findByText} = render(
//         <Controls toggleClosed={toggleClosedMock} closed={false}/>
//     );
//     const closeButton = findByText((/close gate/i));
//     await fireEvent(closeButton, {target: closeButton});
        
//     expect(toggleClosedMock).toHaveBeenCalled();
//     expect(toggleClosedMock).toHaveBeenCalledTimes(1);
// });

test("button text changes based on current state", async () => {
    // const [locked, setLocked] = useState(false);
    // const [closed, setClosed] = useState(false);
    let locked = false;
    let closed = false;
    const setLocked = () => (locked = !locked);
    const setClosed = () => (closed = !closed);
    const controls = render(<Controls closed={closed} locked={locked} />);
    const lockBtn = controls.getByText("Lock Gate");
    const closeBtn = controls.getByText("Close Gate");
    lockBtn.onClick = setLocked((locked) => !locked);
    closeBtn.onClick = setClosed((closed) => (!closed));
    expect(lockBtn).toBeDefined;
    expect(closeBtn).toBeDefined;
    fireEvent.click(closeBtn);
    await fireEvent.click(lockBtn);
    expect(lockBtn).not.toBeDefined;
    expect(closeBtn).not.toBeDefined;
})

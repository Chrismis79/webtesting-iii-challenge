// Test away!
//test if component renders
//snapshot test
//test if 
import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display';

// displays if gate is open/closed and if locked/unlocked
test('Displays if gate is open and unlocked', () => {
    const {getByText} = render(<Display closed={false} locked={false}/>);
    expect(getByText(/open/i));
    expect(getByText(/unlocked/i));
});

test('displays if gate is closed and unlocked', () => {
    const {getByText} = render(<Display closed={true} locked={false}/>);
    expect(getByText(/closed/i));
    expect(getByText(/unlocked/i));
});

test('displays if gate is closed and locked', () => {
    const {getByText} = render(<Display closed={true} locked={true}/>);
    expect(getByText(/closed/i))
    expect(getByText(/locked/i));
});

// displays closed if the closed props is true and open if otherwise
test('displays "closed" if the closed prop is = true', ()=> {
    const {getByText} = render(<Display closed={true}/>);
    expect(getByText(/closed/i));
});

test('displays "open" if the closed prop = false',()=> {
    const {getByText} = render(<Display closed={false}/>);
    expect(getByText(/open/i));
});
test('displays unlocked if locked = false', () => {
    const {getByText} = render(<Display locked={false}/>);
    expect(getByText(/unlocked/i))
});
test('displays locked if locked = true', () => {
    const {getByText} = render(<Display locked={true}/>);
    expect(getByText(/locked/i));
});

// test('Green-led for unlocked/open', ()=> {
    
//     const {getByText} = render(<Display closed={false} locked={false}/>);
//     expect(getByText(/unlocked/i)).toHaveClass('green-led');
//     expect(getByText(/open gate/i)).toHaveClass('green-led');
// });

// test('Display Gate State-Closed', () => {
//     const {getByText} = render(<Display closed={true} locked={true}/>);
//     expect(getByText(/locked/i)).toHaveClass('red-led');
//     expect(getByText(/closed/i)).toHaveClass('red-led');
// });





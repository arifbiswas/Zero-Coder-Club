import React from 'react';

const Questions = () => {
    return (
        <div className='w-full py-10 px-10'>
         <div>
            <h1 className='text-left'><span className='font-bold'>QA: </span> How does React Work?</h1>
            <p>
                React creates a VIRTUAL DOM in memory.

                Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

                React only changes what needs to be changed!

                React finds out what changes have been made, and changes only what needs to be changed.
                </p>
         </div>

         <div className='mt-10'>
            <h1 className='text-left'><span className='font-bold'>QA: </span> Props vs Usestate difference?</h1>
            <p>Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
                </p>
         </div>


         <div className='mt-10'>
            <h1 className='text-left'><span className='font-bold'>QA: </span>useEffect use cases</h1>
            <p>
Running once on mount: fetch API data.
Running on state change: validating input field.
Running on state change: live filtering.
Running on state change: trigger animation on new array value.
Running on props change: update paragraph list on fetched API data update.
                </p>
         </div>




        </div>
    );
};

export default Questions;
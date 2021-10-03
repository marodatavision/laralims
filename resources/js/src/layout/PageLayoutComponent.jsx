import React from 'react';

export const BasicPageLayoutComponent = (props) => {
    return(
        <div className="flex justify-center">
            <div className="bg-white rounded-md shadow-md px-5 py-3">
                {
                    props.children
                }
            </div>
        </div>
    )
}
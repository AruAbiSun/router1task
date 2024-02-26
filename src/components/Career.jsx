import React from 'react';
import Card from './Card';

const Career = ({ data }) => {
    const career = data.filter((item) => item.head === "Career Science");
    return (
        <div>
            {career.map((item, index) => {
                return (
                    <>
                        <Card item={item} index={index} />
                    </>
                )
            })}
        </div>
    );
};

export default Career;
import React from 'react';
import Card from './Card';

const FullStackDevelopment = ({ data }) => {
    const fullstackdevelopment = data.filter(
      (item) => item.head === "Full Stack Development"
    );
    return (
        <div>
            {fullstackdevelopment.map((item, index) => {
                return (
                    <>
                        <Card item={item} index={index} />
                    </>
                )
            }
           )}
        </div>
    );
};

export default FullStackDevelopment;
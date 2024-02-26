import React from 'react';
import Card from './Card';

const CyberSecurity = ({ data }) => {
    const cybersecurity = data.filter((item) => item.head === "Cyber Security");
    return (
        <div>
            {cybersecurity.map((item, index) => {
                return (
                    <>
                        <Card item={item} index={index} />
                    </>
                )
            })}
        </div>
    );
};

export default CyberSecurity;
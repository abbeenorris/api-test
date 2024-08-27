import React, { useState, useEffect } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

// const DUMMY_PROPERTY = {
//     id: 73864112,
//     bedrooms: 3,
//     summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
//     displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
//     propertyType: 'Flat',
//     price: 1950000,
//     branchName: 'M2 Property, London',
//     propertyUrl: '/property-for-sale/property-73864112.html',
//     contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
//     propertyTitle: '3 bedroom flat for sale',
//     mainImage:
//         'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
// };

const PropertyListing = () => {
    const [property, setProperty] = useState([]);

    const url = 'http://localhost:3000/api/properties';

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network error');
                }

                const data = await response.json();
                
                setProperty(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                console.log('Fetch complete');
            }
        };
        
        fetchProperty();
    }, []);

    return (
        <ul className="PropertyListing">
            {property.map((property, index) => (
                <li key={index}>
                    {/* Could use property.id here instead of index */}
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;

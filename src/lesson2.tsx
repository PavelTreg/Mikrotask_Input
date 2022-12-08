import React from 'react';

export  type TopCarsType = {
    students: Array<NewType>
}
export  type NewType = {
    manufacturer: string
    model: string
 }
export const Lesson2 = (props: TopCarsType) => {
    return (
        <table>
            {props.students.map((objektFromTopCars, index)=>{
                return (
<tr>
                    <td key={index}> {index+1}</td>
                    <td key={index}> {objektFromTopCars.manufacturer}</td>
                    <td key={index}> {objektFromTopCars.model}</td>
</tr>
                )
            })}
        </table>
    );
};


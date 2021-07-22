import React from 'react';
import Title from '../components/SectionTitle';
import empresa from '../assets/img/empresa.jpg';

function QuemSomos() {
    return (
        <div className="q-container">
            <div className="title">
                <Title title={'A empresa'} />
            </div>
            <div className="q-info">                
                <div className="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis illo cumque sequi, perferendis reiciendis possimus expedita incidunt minima ab maiores suscipit hic corporis, ratione praesentium dignissimos sapiente! Aperiam, ab natus!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis illo cumque sequi, perferendis reiciendis possimus expedita incidunt minima ab maiores suscipit hic corporis, ratione praesentium dignissimos sapiente! Aperiam, ab natus!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis illo cumque sequi, perferendis reiciendis possimus expedita incidunt minima ab maiores suscipit hic corporis, ratione praesentium dignissimos sapiente! Aperiam, ab natus!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis illo cumque sequi, perferendis reiciendis possimus expedita incidunt minima ab maiores suscipit hic corporis, ratione praesentium dignissimos sapiente! Aperiam, ab natus!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis illo cumque sequi, perferendis reiciendis possimus expedita incidunt minima ab maiores suscipit hic corporis, ratione praesentium dignissimos sapiente! Aperiam, ab natus!
                </div>
                <div className="image">
                    <img src={empresa} alt="" />
                </div>
            </div>
        </div>
        
    );
}

export default QuemSomos;
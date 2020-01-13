import React from "react";
import {Card, CardContent} from '@material-ui/core';
import './style/css/CardList.css';

const CardList = () => {
    return(
        <Card className="card">
            <CardContent>
                <h3>Card Content</h3>
            </CardContent>
        </Card>
    );
}

export default CardList;
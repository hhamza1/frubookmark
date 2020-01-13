import React from "react";
import {Card, CardContent} from '@material-ui/core';
import './style/css/CardList.css';
const CardList = () => {
    return(
        <div>
            <Card className="card">
                <CardContent className="card__details">
                    <ul>
                        <li>Bookmark Name : DJ Okawari</li>
                        <li>Bookmarked By : Hamza HMITOU</li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="card">
                    <CardContent className="card__details">
                        <ul>
                            <li>Bookmark Name : DJ Okawari</li>
                            <li>Bookmarked By : Hamza HMITOU</li>
                        </ul>
                    </CardContent>
            </Card>
        </div>
    );
}

export default CardList;
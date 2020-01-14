import React from "react";
import {Card, CardContent} from '@material-ui/core';
import './style/css/CardList.css';
const CardList = ({bookmarks}) => {
    if(bookmarks.length !== 0) {
        return(
            <div>
                {bookmarks.map((bookmark, key) => {
                    return(
                        <Card key={key} className="card">
                            <CardContent className="card__details">
                                <ul>
                                    <li>Bookmark Name : {bookmark.title}</li>
                                    <li>Bookmarked By : {bookmark.author}</li>
                                </ul>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        );
    }
    else {
        return (
            <div>
                No bookmarks found!
            </div>
        )
    }
}

export default CardList;
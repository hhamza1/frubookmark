/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';

const BookmarkCard = props => {
  const mappedData = props.bookmarks.map((bookmark, index) => {
    return(
          <Card className="bookmark" index={index}>
            <CardContent className="bookmark__content">
              <h2>
                {bookmark.name}
              </h2>
              <h2>
                <a href={bookmark.url} alt="Bookmarked Link">{bookmark.url}</a>
              </h2>
            </CardContent>
          </Card>
    );
  })

      return (
        <Fragment>
          {mappedData}
        </Fragment>
    )
}

export default BookmarkCard;
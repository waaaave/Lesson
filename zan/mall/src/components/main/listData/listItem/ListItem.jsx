import React, { memo } from 'react';
import { List, TextContent } from './ListItem.style.js';
import Lazyload from 'react-lazyload'
import loading from '../../../../assets/images/loading.gif'
import { useHistory } from 'react-router-dom';

const ListItem = (props) => {
  const { item } = props;
  // console.log(item.id, '///////')
  const history = useHistory()
  const gotoDetail = (id) => {
    history.push(`/detail/${id}`)
  }

  return (
    <>

      <List key={item.id} onClick={() => gotoDetail(item.id)}>
        <TextContent>
          <div className="ListItem-title">
            {item.title}
          </div>
          <div className="ListItem-label">
            {item.label}
          </div>
        </TextContent>
        {/* {item.imgsrc} */}
        <div className="ListItem-img">
          <div className="ListItem-content__img">
            <Lazyload 
              height={100}
              placeholder={
                <img width="100%" height="100%" src={loading} />
              }
            >
            <img src={item.imgsrc} alt="" />
            </Lazyload>
          </div>
        </div>
      </List>

      <p className="spanblack"></p>
    </>

  )
}

export default ListItem

import React, { useState } from 'react';
import TIM from '../../@types';
import { useTUIMessageInputContext } from '../../context/TUIMessageInputContext';
import { Icon, IconTypes } from '../Icon';
import { Popup } from '../Popup';
import {
  emojiUrl, emojiName, emojiMap, bigEmojiList, faceUrl,
} from '../TUIMessage/utils/emojiMap';

import type { EmojiData } from './hooks';

export function EmojiPicker():React.ReactElement {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleShow = () => {
    setShow(!show);
  };
  const {
    onSelectEmoji,
    sendFaceMessage,
  } = useTUIMessageInputContext('TUIMessageInputDefault');

  const handleSelectEmoji = (e) => {
    const emoji: EmojiData = {
      index,
      data: e.target.dataset.data,
    };
    if (!emoji.data) {
      return;
    }
    if (index === 0) {
      onSelectEmoji(emoji);
    } else {
      sendFaceMessage(emoji);
      handleShow();
    }
  };

  return (
    <div className="emoji-picker input-plugin-popup">
      <Icon width={20} height={20} type={IconTypes.EMOJI} onClick={handleShow} />
      <Popup
        className="input-plugin-popup-box"
        show={show}
        close={handleShow}
      >
        <ul className="face-tab">
          <li className="face-tab-item">
            <Icon
              width={20}
              height={20}
              type={IconTypes.EMOJI}
              onClick={(e) => { setIndex(0); }}
            />
          </li>
          {
            bigEmojiList.map((item:TIM) => (
              <li role="menuitem" className="face-tab-item" key={item.icon} onClick={(e) => { setIndex(item.icon); }}>
                <img src={`${faceUrl + item.list[0]}@2x.png`} alt="" />
              </li>
            ))
          }
        </ul>
        <ul className="face-list">
          {
            index === 0 && emojiName.map((item:string, emojiIndex:number) => {
              const key = item + emojiIndex;
              return (
                <li
                  role="menuitem"
                  className="face-list-item"
                  key={key}
                  onClick={handleSelectEmoji}
                >
                  <img
                    src={`${emojiUrl + emojiMap[item]}`}
                    alt=""
                    data-data={item}
                  />
                </li>
              );
            })
          }
          {
            index !== 0 && bigEmojiList[index - 1]?.list?.map((item:string, faceIndex:number) => {
              const key = item + faceIndex;
              return (
                <li
                  role="menuitem"
                  className="face-list-item"
                  key={key}
                  onClick={handleSelectEmoji}
                >
                  <img
                    className="face-img"
                    src={`${`${faceUrl + item}@2x.png`}`}
                    alt=""
                    data-data={item}
                  />
                </li>
              );
            })
          }

        </ul>
      </Popup>
    </div>
  );
}

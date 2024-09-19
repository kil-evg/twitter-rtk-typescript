import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { changeAvatar, changeName } from '../features/userSlice';

interface AvatarProps {
  size?: 'small'
}

export const Avatar = ({ size }: AvatarProps) => {
  const {name, avatar} = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();
  return (
    <div>
      <img
        onClick={() => {
          const url = prompt('Enter new avatar url');
          dispatch(changeAvatar(url));
        }}
        onContextMenu={e =>  {
          e.preventDefault();
          const name = prompt('Enter new name');
          dispatch(changeName(name));
        }}
        className={`user-avatar ${size ?? ''}`}
        src={avatar}
        alt={name}
      />
    </div>
  )
}

import React, { FC } from 'react';
import { Member } from '../../data/interfaces';

type MemberAvatarProps = {
  member: Member;
};

const MemberAvatar: FC<MemberAvatarProps> = ({ member }) => {
  return (
    <div className="flex space-x-4">
      <img
        className="w-16 h-16 rounded-full hover:shadow-light-100"
        src={member.avatar}
      />
      <div>
        <div className=" font-semibold">{member.name}</div>
        <div>{member.kana}</div>
      </div>
    </div>
  );
};

export default MemberAvatar;

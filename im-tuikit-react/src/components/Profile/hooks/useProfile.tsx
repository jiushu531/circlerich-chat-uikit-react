import React, { useState, useEffect } from 'react';
import TIM from '../../../@types/index';

export function useProfile(tim: TIM, profileHandler?: (
  profile: TIM,
  setProfile?: React.Dispatch<React.SetStateAction<TIM>>,
) => void) {
  const [myProfile, setMyProfile] = useState<TIM>();

  const getProfile = async (userIDList: Array<string>) => {
    const res = await tim?.getUserProfile({
      userIDList,
    });
    return res.data;
  };
  const getMyProfile = async () => {
    const res = await tim?.getMyProfile();
    setMyProfile(res?.data);
  };
  useEffect(() => {
    getMyProfile();
  }, [tim]);
  return {
    myProfile,
    setMyProfile,
    getProfile,
  };
}

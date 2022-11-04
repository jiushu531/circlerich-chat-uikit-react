import React from 'react';
import TIM from '../../@types/index.d.js';
import { ProfileParams } from './hooks/useMyProfile.js';

interface TUIProfileDefaultProps {
    userInfo?: TIM;
    update?: (option: ProfileParams) => void;
    className?: string;
}
declare function TUIProfileDefault(props: TUIProfileDefaultProps): React.ReactElement;

export { TUIProfileDefault, TUIProfileDefaultProps };

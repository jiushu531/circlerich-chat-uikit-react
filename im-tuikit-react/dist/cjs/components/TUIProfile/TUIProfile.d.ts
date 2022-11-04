import React, { PropsWithChildren } from 'react';
import TIM from '../../@types/index.d.js';

interface TUIProfileProps {
    className?: string;
    TUIProfile?: React.ComponentType<TIM>;
}
declare function UnMemoizedTUIProfile<T extends TUIProfileProps>(props: PropsWithChildren<T>): React.ReactElement;
declare const TUIProfile: typeof UnMemoizedTUIProfile;

export { TUIProfile };

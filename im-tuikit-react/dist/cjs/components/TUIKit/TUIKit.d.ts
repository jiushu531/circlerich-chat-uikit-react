import React, { PropsWithChildren } from 'react';
import TIM from '../../@types/index.d.js';

interface ChatProps {
    tim: TIM;
    customClasses?: unknown;
}
declare function TUIKit<T extends ChatProps>(props: PropsWithChildren<T>): React.ReactElement;

export { ChatProps, TUIKit };

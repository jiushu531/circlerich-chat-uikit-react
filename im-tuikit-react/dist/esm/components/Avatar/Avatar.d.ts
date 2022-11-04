import React from 'react';

interface AvatarProps {
    image?: string | null;
    /** click event handler */
    onClick?: (event: React.BaseSyntheticEvent) => void;
    /** mouseOver event handler */
    onMouseOver?: (event: React.BaseSyntheticEvent) => void;
    /** Size in pixels
     * @default 32px
     */
    size?: number;
    /** Shape of the avatar - circle, rounded or square
     * @default circle
     */
    shape?: 'circle' | 'rounded' | 'square';
    update?: (url: string) => void;
    list?: Array<string>;
}
declare function Avatar<T extends AvatarProps>(props: T): React.ReactElement;

export { Avatar, AvatarProps };

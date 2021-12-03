import * as React from 'react';
declare type HeaderProps = {
    onAddColumn?: () => void;
    onAddRow?: () => void;
    headerActions?: React.ReactNode;
};
declare const Header: React.FC<HeaderProps>;
export default Header;

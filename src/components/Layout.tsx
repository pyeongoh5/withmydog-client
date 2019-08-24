import React from 'react';
import '../styles/common.css';

interface IProps {
    children?: React.ReactNode;
}

const Layout: React.FC = (props: IProps) => {
    return <>{props.children}</>;
};

export default Layout;

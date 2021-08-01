import React from 'react'
import Head from 'next/head'
import { node } from 'prop-types'
import Header from '../header'

const BaseLayout = ({ children, ...props }) => {

    return (
        <React.Fragment>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className='relative'>
                {children}
            </main>
        </React.Fragment>
    );
}

BaseLayout.prototypes =
{
    children: node.isRequired,
};
export default BaseLayout;

export const withLayout = (Component, LayoutComponent = BaseLayout) => {

    Component.layout = LayoutComponent;

    return Component;
}
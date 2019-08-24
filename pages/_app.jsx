import React from 'react';
import App, { Container } from 'next/app';

import Layout from '../src/components/Layout';

export default class MyApp extends App {
    constructor(props) {
        super(props);
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        );
    }
}

import React, { Component } from "react";
import Head from "next/head"; 
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <Header />
        {this.props.children}
        <Footer />
        <style jsx global>{`
          html {
            overflow-y: scroll;
          }
          body {
            margin: 0;
            padding: 0;
            font-size: 16px;
            width: max-content;
            min-width: 100%;
          }
          main {
            width: 760px;
            margin: 0 auto;
            min-height: 100vh;
            padding: 1px 0 0;
          }
        `}</style>
      </>
    );
  }
}

export default Layout;

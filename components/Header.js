import React, { Component } from 'react';
import Link from "next/link";

class Header extends Component{
  render(){
    return(
      <>
      <header className="header">
        <div className="header__inner">
          <div className="header__discription">
            <Link href="/">
              <a className="header__discription-link">バットマンのことなら○○○○○</a>
            </Link>
          </div>
          <div className="header__row">
            <div className="header__col is-logo">
              <Link href="/">
                <a>
                  <img src="./sitelogo.svg" alt="○○○○○" className="header__sitelogo" />
                </a>
              </Link>
            </div>
            <div className="header__col is-link">
              <div>
                <Link href="/">
                  <a className="header__link">Home</a>
                </Link>
                <Link href="/about">
                  <a className="header__link">About</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <style jsx>{`
        .header{
        }
        .header__inner{
          width:760px;
          margin: 0 auto;
        }
        .header__discription-link{
          color:#333;
          font-size:11px;
          text-decoration:none;
        }
        .header__row{
          margin-top:4px;
          display:flex;
        }
        .header__col.is-logo{
          width:280px;
        }
        .header__col.is-link{
          margin-left:48px;
          text-align:right;
          flex: 1 0 0;
        }
        .header__sitelogo{
          width:280px;
          height:60px;
          display:block;
          border:1px solid #ddd;
        }
        .header__link{
          margin-left:12px;
        }
      `}</style>
      </>
    )
  }
};

export default Header;

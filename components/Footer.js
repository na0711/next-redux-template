import Link from "next/link";

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer__inner">
        <div className="copyright">
          <Link href="/">
            <a className="copyright__link">バットマンのことなら○○○○○</a>
          </Link>
        </div>
      </div>
    </footer>
    <style jsx>{`
      .footer{
        margin-top:48px;
        background-color:#eee;
      }
      .footer__inner{
        width:760px;
        margin: 0 auto;
      }
      .copyright{
        text-align:center;
      }
      .copyright__link{
        text-decoration:none;
        color:#333;
      }
    `}</style>
  </>
);

export default Footer;

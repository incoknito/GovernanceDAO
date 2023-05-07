import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import AuthContext from "../../Context/auth-context";
const shortAddress = (_addr) => _addr.substring(0, 16) + "...";
const Header = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="header">
      <div className="header_nav_buttons">
        <FontAwesomeIcon className="icon" icon={faBell} />
        <FontAwesomeIcon className="icon" icon={faPlus} />
        {!ctx.isConnected && (
          <button className="connectWallet" onClick={ctx.connectWallet}>
            Connect Wallet
          </button>
        )}
        {ctx.isConnected && (
          <button className="addressBar" onClick={ctx.disconnectWallet}>
            {shortAddress(ctx.account)}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

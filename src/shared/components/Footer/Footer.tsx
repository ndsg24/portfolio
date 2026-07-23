import { memo } from "react";
import { ArrowUp } from "lucide-react";
import { usePortfolio } from "../../../app/providers/usePortfolio";
import "./Footer.css";

function Footer() {
  const { t } = usePortfolio();

  return (
    <footer className="footer">
      <strong className="footer-identity">{t("footer.copyright")}</strong>
      <span className="footer-meta">{t("footer.meta")}</span>
      <a className="footer-back-top" href="#home">
        {t("footer.backToTop")}
        <ArrowUp size={15} aria-hidden="true" />
      </a>
    </footer>
  );
}

export default memo(Footer);

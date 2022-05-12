import { useEffect, useState } from "react";
import { LogoUrls } from "./LogoUrlsEnum";
import { useTranslationApi } from "../../../contexts/translate";

import css from './Logo.module.scss';

export const Logo = () => {
  const [logoUrl, setLogoUrl] = useState(LogoUrls.Default);
  const { language } = useTranslationApi();

  useEffect(() => {
    // Easter Egg: with 3% chance the logotype will be replaced with Discord one
    const isDiscord = Math.floor(Math.random() * 100) < 3;
    
    if (isDiscord) {
      setLogoUrl(LogoUrls.Discord);
    }
  }, []);

  return (
    <div className={css.logo}>
      <a 
        href="/"
        className={css.link}
      >
        <span className={css.title}>
          {language.header.logo}
        </span>
        <img 
          className={css.preview}
          src={logoUrl}
          alt="MLP Logo"
          title="Logotype"
        />
      </a>
    </div>
  )
}
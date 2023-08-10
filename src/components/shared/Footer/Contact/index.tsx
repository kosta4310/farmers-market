import { FC } from "react";
import logoYoutube from '../../../../assets/icons/social/YouTube.svg'
import logoFacebook from '../../../../assets/icons/social/Facebook_white.svg'
import logoInstagram from '../../../../assets/icons/social/Instagram_white.svg'
import logoTelegram from '../../../../assets/icons/social/Telegram_white.svg'

const Contact: FC = () => {
  return (
    <div className="flex flex-col  gap-y-5">
      <div>
        <h2 className="font-semibold text-xl">Контакти</h2>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-0.5">
        <a href="tel:0991122333">0991122333</a>
        <a href="mailto:challenge@gmail.com">challenge@gmail.com</a>
        <div className="flex gap-x-1 py-2">
          <a href="https://www.youtube.com/">
            <img src={logoYoutube} alt="logoYoutube" />
          </a>
          <a>
            <img src={logoFacebook} alt="logoFacebook" />
          </a>
          <a>
            <img src={logoInstagram} alt="logoInstagram" />
          </a>
          <a>
            <img src={logoTelegram} alt="logoTelegram" />
          </a>
         </div>
        
      </div>

    </div>
  );
};

export default Contact;
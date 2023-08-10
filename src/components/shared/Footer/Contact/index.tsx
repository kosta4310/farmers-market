import { FC } from "react";
import logoYoutube from '../../../../assets/icons/social/YouTube.svg'
import logoFacebook from '../../../../assets/icons/social/Facebook_white.svg'
import logoInstagram from '../../../../assets/icons/social/Instagram_white.svg'
import logoTelegram from '../../../../assets/icons/social/Telegram_white.svg'

const Contact: FC = () => {
  return (
    <div className="flex flex-col  gap-y-2">
      <div>
        <h2 className="font-semibold text-xl">Контакти</h2>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-0.5">
        <div>0991122333</div>
        <div>challenge@gmail.com</div>
        <div className="flex gap-x-1 py-2">
          <span>
            <img src={logoYoutube} alt="logoYoutube" />
          </span>
          <span>
            <img src={logoFacebook} alt="logoFacebook" />
          </span>
          <span>
            <img src={logoInstagram} alt="logoInstagram" />
          </span>
          <span>
            <img src={logoTelegram} alt="logoTelegram" />
          </span>
         </div>
        
      </div>

    </div>
  );
};

export default Contact;
import { FC, useState } from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  ViberIcon,
  ViberShareButton,
} from 'react-share';
import share from '../../../assets/icons/fullInfoCard/share.svg';
import { useLocation } from 'react-router-dom';

const Share: FC = () => {
  const [shared, setShared] = useState<boolean>(false);
  const location = useLocation();

  const shareUrl = `https://rococo-lily-7ace0e.netlify.app${location.pathname}`;
  const title = 'Щось новеньке';
  return (
    <div>
      {shared ? (
        <ul className="flex gap-3">
          <li>
            <div>
              <TelegramShareButton url={shareUrl} title={title}>
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>
          </li>
          <li>
            <div>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <div>
                <FacebookShareCount
                  url={shareUrl}
                >
                  {count => count}
                </FacebookShareCount>
              </div>
            </div>
          </li>
          <li>
            <div>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </li>
          <li>
            <div>
              <EmailShareButton url={shareUrl} subject={title} body="body">
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
          </li>
          <li>
            <div>
              <ViberShareButton url={shareUrl} title={title}>
                <ViberIcon size={32} round />
              </ViberShareButton>
            </div>
          </li>
        </ul>
      ) : (
        <button
          type="button"
          onClick={() => {
            setShared(!shared);
          }}
        >
          <img src={share} alt="share" />
        </button>
      )}
    </div>
  );
};

export default Share;

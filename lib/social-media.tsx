// A module for handling social media.
import { SocialMediaProps } from '@ircsignpost/signpost-base/dist/src/header-banner';

import facebookImage from '../public/facebook.svg';
import messengerImage from '../public/messenger.svg';
import whatsappImage from '../public/whatsapp.svg';
import whatsappChannelImage from '../public/whatsappchannel.svg';
import tiktokImage from '../public/tiktok.svg';
import instagramImage from '../public/Instagram.svg';

export interface SocialMediaLink {
  title: string;
  href: string;
}

// Serializable social media links
export interface SocialMediaLinks {
  facebookLink: SocialMediaLink;
  whatsappLink: SocialMediaLink;
  whatsappChannel: SocialMediaLink;
  messengerLink: SocialMediaLink;
  instagramLink: SocialMediaLink;
  tiktokLink: SocialMediaLink;
}

/**
 * Provides data for Social Media buttons, e.g. Facebook, Whatsapp, etc.
 *
 * TODO: You might need to add new Social media buttons or remove Facebook/Whatsapp/Messenger.
 * If so, import social media icons (or remove unused ones) under public/ dir.
 */
export function getSocialMediaProps(
  socialMediaLinks: SocialMediaLinks
): SocialMediaProps[] {
  return [
    {
      ...socialMediaLinks.facebookLink,
      image: facebookImage,
    },
    {
      ...socialMediaLinks.whatsappChannel,
      image: whatsappChannelImage,
    },
    {
      ...socialMediaLinks.whatsappLink,
      image: whatsappImage,
    },
    {
      ...socialMediaLinks.instagramLink,
      image: instagramImage,
    },
    {
      ...socialMediaLinks.tiktokLink,
      image: tiktokImage,
    },
    {
      ...socialMediaLinks.messengerLink,
      image: messengerImage,
    },
  ];
}

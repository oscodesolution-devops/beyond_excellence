import Ads from "@/components/Ads";
import Card from "@/components/Card";
import Cetegory from "@/components/Cetegory";
import Deal from "@/components/Deal";
import Heading from "@/components/Heading";
import OfferBanner from "@/components/OfferBanner";
import ProductCard from "@/components/ProductCard";
import Promotion from "@/components/Promotion";
import PromotionCard from "@/components/PromotionCard";
import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";
import Defualt from "@/Images/Products/defult.jpg"

import { OfferBannerImg } from "@/Docs/Data"
export default function Home() {
  return (
    <>
      <Cetegory />
      <Ads />
      <Heading title="demo" para="demo para" />
      <Promotion />
      <SocialMedia />
      <Heading title="Deal " para="Deal of the day" />
      <Deal />
      <Heading title="Deal " para="Deal of the day" />
      <OfferBanner data={OfferBannerImg} />
    </>
  );
}

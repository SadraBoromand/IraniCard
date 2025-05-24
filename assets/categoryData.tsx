import Svg_briefcase from "./svgs/briefcase.svg";
import Svg_buliding from "./svgs/buliding.svg";
import Svg_buy_crypto from "./svgs/buy-crypto.svg";
import Svg_card_pos from "./svgs/card-pos.svg";
import Svg_game from "./svgs/game.svg";
import Svg_gift from "./svgs/gift.svg";
import Svg_paypal from "./svgs/paypal.svg";
import Svg_shopping_bag from "./svgs/shopping-bag.svg";
import Svg_virtual_card from "./svgs/virtual_card.svg";
import Svg_wallet from "./svgs/wallet.svg";

export interface ICategoryItem {
  title: string;
  subtitle?: string;
  icon?: any;
  subItems?: ICategoryItem[];
}

export const categoryData: ICategoryItem[] = [
  {
    title: "ویزا، مسترکارت فیزیکی",
    subtitle: "ویزا مسترکارت فیزیکی | شارژ کارت ها | کارت .....",
    icon: <Svg_wallet width={40} height={40} />,
    subItems: [{ title: "افتتاح حساب حضوری" }],
  },
  {
    title: "ویزا کارت و مسترکارت مجازی",
    subtitle: "ویزا کارت |مسترکارت مجازی",
    icon: <Svg_virtual_card width={40} height={40} />,
    subItems: [{ title: "افتتاح حساب حضوری" }],
  },
  {
    title: "گیفت کارت ها",
    subtitle: "اپلیکیشن و وب |بازی ها",
    icon: <Svg_gift width={40} height={40} />,
    subItems: [{ title: "افتتاح حساب حضوری" }],
  },
  {
    title: "پرداخت در سایتهای خارجی",
    subtitle: "سرور مجازی| اکانتهای بین المللی |خدمات سفر ....",
    icon: <Svg_card_pos width={40} height={40} />,
    subItems: [{ title: "افتتاح حساب حضوری" }],
  },
  {
    title: "خرید کالا و تحویل در ایران",
    subtitle: "آمریکا| کانادا| انگلیس |امارات |ترکیه | ایتالیا| آلمان | اس ..",
    icon: <Svg_shopping_bag width={40} height={40} />,
    subItems: [{ title: "افتتاح حساب حضوری" }],
  },
  {
    title: "پی پال پول الکترونیک",
    subtitle: "رولوت | پی پال | وایز |وب مانی| پایر | پایونیر| ....",
    icon: <Svg_paypal width={40} height={40} />,
  },
  {
    title: "رمز ارز بیت کوین تتر و...",
    subtitle: "خرید و فروش رمزارز | کیف پول سخت افزاری",
    icon: <Svg_buy_crypto width={40} height={40} />,
    subItems: [{ title: "افتتاح حساب حضوری" }],
  },
  {
    title: "سرویس ها",
    subtitle: "سرور مجازی |اکانتهای ترایال | کد آزمون |",
    icon: <Svg_briefcase width={40} height={40} />,
    subItems: [{ title: "افتتاح حساب حضوری" }],
  },

  {
    title: "ثبت شرکت",
    subtitle: "ثبت شرکت در کشورهای مختلف",
    icon: <Svg_buliding width={40} height={40} />,
  },
  {
    title: "سریال نامبر بازی و نرم افزار",
    subtitle: "انواع پلتفرم ها و ریجن ها",
    icon: <Svg_game width={40} height={40} />,
  },
];

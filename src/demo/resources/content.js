// Demo seed data & mock API routes for news, banners, brands, certificates,
// reviews, achievements/awards, FAQs, and maintenance instructions.

import { db, registerSeed } from "../db";
import { registerRoutes, respond } from "../mockServer";
import {
  bannerImage,
  batteryImage,
  certificateImage,
  placeholderImage,
} from "../images";

import homeSlide1 from "../../assets/images/HomePage/Slider/RA-main-page-slide-1.png";
import homeSlide2 from "../../assets/images/HomePage/Slider/RA-main-page-slide-2.png";
import bdBanner from "../../assets/images/BannerImages/ProductsPage/Bangladesh-products-banner-1.jpg";
import intBanner from "../../assets/images/BannerImages/ProductsPage/International-products-banner.jpg";
import mgmtBanner from "../../assets/images/BannerImages/AboutPage/Management.jpg";
import mfgBanner from "../../assets/images/BannerImages/AboutPage/Manufacturing.jpg";
import rspbBanner from "../../assets/images/BannerImages/AboutPage/RahimafroozBatteriesLtd.jpg";
import awardBanner from "../../assets/images/BannerImages/AboutPage/SpecialAwardsAndAchievement.jpg";
import partnerBanner from "../../assets/images/BannerImages/BecomeAPartner/Become-a-dealer-banner.jpg";
import warrantyBanner from "../../assets/images/BannerImages/WarrantyAndServicesPage/Manage_My_Battery_Registration_Page_Banner.jpg";

const validImg = (v) =>
  typeof v === "string" && (v.startsWith("data:") || v.startsWith("http") || v.startsWith("/"));

const validImgArray = (v) => {
  const arr = Array.isArray(v) ? v : v ? [v] : [];
  return arr.filter(validImg);
};

// ---------------------------------------------------------------------------
// Seed data
// ---------------------------------------------------------------------------

const NEWS_SEED = [
  {
    id: 1,
    title: "Rahimafrooz Launches Next-Gen Globatt EFB Start-Stop Batteries",
    publish_date: "2026-09-18",
    image_url: placeholderImage("Globatt EFB Launch", { subtitle: "Start-Stop & Hybrid Automotive Series", bg: "#005bab" }),
    description:
      "Rahimafrooz Batteries Ltd. has officially unveiled its next-generation Enhanced Flooded Battery (EFB) lineup engineered specifically for modern Start-Stop and Hybrid vehicles operating in tropical climates. Tested extensively across Dhaka's stop-and-go city traffic, the new Globatt EFB series delivers twice the cycle life of conventional flooded batteries along with rapid charge acceptance and zero water top-up maintenance.",
  },
  {
    id: 2,
    title: "Export Footprint Reaches 70+ Global Markets Across Six Continents",
    publish_date: "2026-07-04",
    image_url: placeholderImage("70+ Global Markets", { subtitle: "Bangladesh Manufacturing Goes Global", bg: "#0E7490" }),
    description:
      "Building on three decades of international trade since 1992, Rahimafrooz Storage Power Business has expanded its export network into over 70 countries across APAC, the Middle East, Europe, and Africa. Flagship export brands GLOBATT, VOLTA, IGNUS, and DELTA continue to earn high reliability marks from overseas automotive distributors and industrial fleet operators.",
  },
  {
    id: 3,
    title: "New Automated VRLA & Solar Gel Line Commissioned at Ishwardi EPZ",
    publish_date: "2026-04-22",
    image_url: placeholderImage("Ishwardi EPZ Expansion", { subtitle: "High-Capacity Solar & Telecom Line", bg: "#15803D" }),
    description:
      "To meet surging regional demand for renewable energy storage and telecom backup power, Rahimafrooz has commissioned a fully automated Valve Regulated Lead Acid (VRLA) and OPzV Tubular Gel production line at its Ishwardi EPZ facility. The plant incorporates closed-loop lead recycling and zero-liquid-discharge wastewater systems.",
  },
  {
    id: 4,
    title: "National Export Trophy (Gold) Awarded for Battery & Accumulator Sector",
    publish_date: "2025-12-11",
    image_url: placeholderImage("National Export Trophy", { subtitle: "Gold Award Recognition", bg: "#B45309" }),
    description:
      "Rahimafrooz Batteries Ltd. has once again been honored with the prestigious National Export Trophy in recognition of its sustained export growth, quality compliance, and contribution to Bangladesh's manufacturing sector.",
  },
  {
    id: 5,
    title: "Nationwide Free Battery Health Checkup Campaign Serves 25,000+ Drivers",
    publish_date: "2025-09-29",
    image_url: placeholderImage("Battery Health Drive", { subtitle: "25,000+ Vehicles Inspected", bg: "#E31E24" }),
    description:
      "Across 64 districts, Rahimafrooz authorized service centers and partner workshops conducted a month-long complimentary battery diagnostics and charging-system inspection drive, helping motorists extend battery service life and dispose of end-of-life units through eco-friendly recycling channels.",
  },
  {
    id: 6,
    title: "Digital Warranty Registration Portal Now Live for All Automotive & IPS Models",
    publish_date: "2025-06-15",
    image_url: placeholderImage("Digital Warranty Portal", { subtitle: "Instant Online Status Tracking", bg: "#1F2A44" }),
    description:
      "Customers can now register their Rahimafrooz, Globatt, Volta, and Lucas batteries online in seconds and check remaining warranty coverage anytime using their phone number and product short code.",
  },
];

const BANNER_IMAGES_SEED = [
  { id: 1, page_name: "home", img_url: [homeSlide1, homeSlide2] },
  { id: 2, page_name: "board_members", img_url: [mgmtBanner] },
  { id: 3, page_name: "storage_power", img_url: [rspbBanner] },
  { id: 4, page_name: "manufacturing", img_url: [mfgBanner] },
  { id: 5, page_name: "achievement", img_url: [awardBanner] },
  { id: 6, page_name: "products_bd", img_url: [bdBanner] },
  { id: 7, page_name: "products_int", img_url: [intBanner] },
  { id: 8, page_name: "warranty", img_url: [warrantyBanner] },
  { id: 9, page_name: "partner", img_url: [partnerBanner] },
  {
    id: 10,
    page_name: "global_presence",
    img_url: [bannerImage("GLOBAL PRESENCE", "Powering 70+ Countries Worldwide", { bg: "#005bab" })],
  },
];

const BRANDS_SEED = [
  { id: 1, brand_name: "GLOBATT", image_url: batteryImage("GLOBATT", { brand: "MAINTENANCE FREE", color: "#E31E24" }) },
  { id: 2, brand_name: "VOLTA", image_url: batteryImage("VOLTA", { brand: "POWER SERIES", color: "#15803D" }) },
  { id: 3, brand_name: "LUCAS", image_url: batteryImage("LUCAS", { brand: "SUPREME HD", color: "#B45309" }) },
  { id: 4, brand_name: "IGNUS", image_url: batteryImage("IGNUS", { brand: "EURO AGM", color: "#BE185D" }) },
  { id: 5, brand_name: "DELTA", image_url: batteryImage("DELTA", { brand: "INDUSTRIAL", color: "#0369A1" }) },
  { id: 6, brand_name: "RAHIMAFROOZ", image_url: batteryImage("TUBULAR", { brand: "RAHIMAFROOZ", color: "#1F2A44" }) },
];

const CERTIFICATES_SEED = [
  {
    id: 1,
    title: "ISO 9001:2015 Quality Management",
    img_url: certificateImage("ISO 9001:2015", { subtitle: "Quality Management System" }),
    created_at: "2024-03-15",
  },
  {
    id: 2,
    title: "ISO 14001:2015 Environmental Management",
    img_url: certificateImage("ISO 14001:2015", { subtitle: "Environmental Stewardship" }),
    created_at: "2024-05-10",
  },
  {
    id: 3,
    title: "ISO 45001:2018 Health & Safety",
    img_url: certificateImage("ISO 45001:2018", { subtitle: "Occupational Safety & Health" }),
    created_at: "2024-07-22",
  },
  {
    id: 4,
    title: "IATF 16949 Automotive Quality",
    img_url: certificateImage("IATF 16949", { subtitle: "Global Automotive Standard" }),
    created_at: "2025-01-14",
  },
  {
    id: 5,
    title: "BSTI Certified Product Quality",
    img_url: certificateImage("BSTI Certified", { subtitle: "Bangladesh Standards & Testing" }),
    created_at: "2025-04-08",
  },
  {
    id: 6,
    title: "CE European Conformity",
    img_url: certificateImage("CE Conformity", { subtitle: "European Market Compliance" }),
    created_at: "2025-08-19",
  },
];

const REVIEWS_SEED = [
  {
    id: 1,
    user_name: "Tanvir Ahmed, Dhaka",
    review:
      "Using Globatt Hybrid S46B24R in my Toyota Prius for over two years now. Zero starting issues even after long highway trips and heavy AC usage in summer.",
  },
  {
    id: 2,
    user_name: "Mahmudul Hasan, Chattogram",
    review:
      "We run 18 commercial trucks on Volta N150 batteries. The cranking reliability and nationwide warranty support have significantly reduced our fleet downtime.",
  },
  {
    id: 3,
    user_name: "Farhana Rahman, Sylhet",
    review:
      "Our home IPS with the Rahimafrooz RT-150 Tall Tubular battery gives steady 7+ hours backup during power outages and requires minimal maintenance.",
  },
  {
    id: 4,
    user_name: "Kamrul Islam, Rajshahi",
    review:
      "Switched to Globatt SMF NS60L for my Corolla Axio. Quick installation at the authorized dealer and effortless online warranty registration.",
  },
  {
    id: 5,
    user_name: "Nusrat Jahan, Khulna",
    review:
      "Installed Delta OPzV Solar batteries for our rooftop solar project. Consistent deep-cycle performance and great technical guidance from the RSPB engineering team.",
  },
];

const ACHIEVEMENTS_SEED = [
  // Special Achievements (description set, caption null)
  {
    id: 1,
    caption: null,
    description:
      "National Export Trophy (Gold) — Awarded by the Government of Bangladesh for outstanding export performance in the Electrical & Battery Accumulator category for multiple consecutive years.",
    img_url: placeholderImage("National Export Trophy", { subtitle: "Gold Category Winner", bg: "#B45309" }),
  },
  {
    id: 2,
    caption: null,
    description:
      "Best Brand Award in Automotive Battery Category — Recognized by Bangladesh Brand Forum & Nielsen for earning the highest consumer trust across urban and rural markets.",
    img_url: placeholderImage("Best Brand Award", { subtitle: "#1 Trusted Battery Brand", bg: "#005bab" }),
  },
  {
    id: 3,
    caption: null,
    description:
      "Green Factory & Environmental Excellence Award — Honored for operating closed-loop eco-friendly lead recycling, automated air filtration, and zero-liquid-discharge effluent treatment plants.",
    img_url: placeholderImage("Green Factory Award", { subtitle: "Sustainable Manufacturing", bg: "#15803D" }),
  },
  {
    id: 4,
    caption: null,
    description:
      "Pioneer of Maintenance-Free Battery Manufacturing — First manufacturer in Bangladesh to introduce world-class Calcium-Calcium SMF, EFB Start-Stop, and OPzV Gel battery technologies.",
    img_url: placeholderImage("Industry Pioneer", { subtitle: "70+ Years of Excellence", bg: "#1F2A44" }),
  },
  // Award Slider Gallery Items (caption set, description null)
  {
    id: 5,
    caption: "National Export Trophy — Gold",
    description: null,
    img_url: certificateImage("National Export Trophy", { subtitle: "Gold Award" }),
  },
  {
    id: 6,
    caption: "Best Brand Award — Battery Category",
    description: null,
    img_url: certificateImage("Best Brand Award", { subtitle: "Bangladesh Brand Forum" }),
  },
  {
    id: 7,
    caption: "HSBC Export Excellence Award",
    description: null,
    img_url: certificateImage("Export Excellence", { subtitle: "HSBC Recognition" }),
  },
  {
    id: 8,
    caption: "Superbrands Bangladesh Recognition",
    description: null,
    img_url: certificateImage("Superbrands", { subtitle: "Bangladesh Edition" }),
  },
  {
    id: 9,
    caption: "National Productivity & Quality Excellence",
    description: null,
    img_url: certificateImage("Quality Excellence", { subtitle: "Ministry of Industries" }),
  },
  {
    id: 10,
    caption: "DHL-Daily Star Enterprise of the Year",
    description: null,
    img_url: certificateImage("Enterprise of the Year", { subtitle: "Business Award" }),
  },
];

const FAQS_SEED = [
  {
    id: 1,
    question: "How do I choose the right Rahimafrooz battery for my car?",
    answer:
      "Use the 'Find The Right Battery' tool on the homepage by selecting your vehicle category (Passenger Car or Commercial Vehicle), technology (Hybrid/Non-Hybrid), brand, model, and year. The finder compares compatible models side by side with exact JIS codes, CCA ratings, and dimensions.",
  },
  {
    id: 2,
    question: "How can I register and verify my battery warranty online?",
    answer:
      "Go to the 'Warranty & Services' page, fill in the Online Registration form with your Product Short Code, dealer name, and purchase date. Once approved by our service team, you can check your remaining warranty duration anytime using your Phone Number and Product Short Code.",
  },
  {
    id: 3,
    question: "What is the difference between SMF (Maintenance Free) and Conventional batteries?",
    answer:
      "SMF batteries like Globatt use Calcium-Calcium alloy plates that drastically reduce water loss, meaning no regular distilled-water top-ups are needed. Conventional flooded batteries require periodic electrolyte level checks every 2–3 months.",
  },
  {
    id: 4,
    question: "Can I use a standard battery in a Hybrid or Start-Stop vehicle?",
    answer:
      "No. Hybrid and Start-Stop vehicles experience frequent charge/discharge cycles and require AGM or EFB batteries (such as Globatt S46B24R AGM or Q-85 EFB) to ensure safety, cabin-venting compatibility, and long service life.",
  },
  {
    id: 5,
    question: "How often should I top up my IPS Tubular battery?",
    answer:
      "Check the water level indicators on your Tall Tubular IPS battery every 3 to 4 months and top up ONLY with pure de-ionized / distilled water. Never add acid or tap water.",
  },
  {
    id: 6,
    question: "Where can I locate the nearest authorized Rahimafrooz dealer?",
    answer:
      "Use the 'Find Rahimafrooz Dealer' locator on the Home or Find Dealer page. Select your Division, District, and Thana to view verified dealer shop addresses, contact numbers, and Google Maps links.",
  },
  {
    id: 7,
    question: "What does Pro-Rata warranty mean?",
    answer:
      "Following the initial free replacement warranty period, Pro-Rata warranty entitles you to a discounted replacement battery calculated proportionally based on the remaining months of your total warranty term.",
  },
];

const INSTRUCTIONS_SEED = [
  {
    id: 1,
    title: "Routine Visual Inspection & Terminal Cleaning",
    description:
      "Inspect battery terminals every 2 months for white/greenish sulfation corrosion. Disconnect the negative (-) cable first, clean posts and clamps using a baking-soda solution and wire brush, rinse, dry thoroughly, and apply a thin coat of petroleum jelly or terminal protector spray.",
  },
  {
    id: 2,
    title: "Electrolyte Level Check (Flooded & Tubular Batteries)",
    description:
      "For non-SMF automotive, commercial, and IPS tubular batteries, keep the electrolyte level between the MIN and MAX markers. Always refill using distilled or de-ionized water only—never tap water or acid—and avoid overfilling above the upper mark.",
  },
  {
    id: 3,
    title: "Charging System & Alternator Health",
    description:
      "A healthy 12V vehicle alternator should maintain 13.8V to 14.4V while the engine is running. Under-charging (<13.5V) leads to plate sulfation, while over-charging (>14.8V) boils away electrolyte and shortens battery life.",
  },
  {
    id: 4,
    title: "Safe Storage & Long-Term Parking",
    description:
      "If a vehicle will remain parked for more than 3 weeks, disconnect the negative terminal or attach a smart maintenance trickle charger. Store spare batteries fully charged in a cool, dry, well-ventilated space away from open flames.",
  },
  {
    id: 5,
    title: "Proper Mounting & Vibration Protection",
    description:
      "Always secure the battery firmly with its hold-down clamp. Excessive vibration on rough roads can crack the battery casing, loosen internal plates, and cause premature failure.",
  },
  {
    id: 6,
    title: "Eco-Friendly Disposal & Recycling",
    description:
      "Lead-acid batteries are over 98% recyclable. Never dispose of spent batteries with household waste—return your used battery to any authorized Rahimafrooz dealer for safe, environmentally certified recycling.",
  },
];

registerSeed("news", NEWS_SEED);
registerSeed("banner_images", BANNER_IMAGES_SEED);
registerSeed("brands", BRANDS_SEED);
registerSeed("certificates", CERTIFICATES_SEED);
registerSeed("reviews", REVIEWS_SEED);
registerSeed("achievements", ACHIEVEMENTS_SEED);
registerSeed("faqs", FAQS_SEED);
registerSeed("instructions", INSTRUCTIONS_SEED);

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

registerRoutes([
  // --- News ---
  { method: "GET", path: "/news", handler: () => db.all("news") },
  {
    method: "GET",
    path: "/news/:id",
    handler: (req) => {
      const item = db.get("news", req.params.id);
      return item ? [item] : [];
    },
  },
  {
    method: "POST",
    path: "/news",
    handler: (req) => {
      const title = req.body?.title || "Untitled News";
      const rec = db.insert("news", {
        title,
        description: req.body?.description || "",
        publish_date: new Date().toISOString().slice(0, 10),
        image_url: validImg(req.body?.image_url)
          ? req.body.image_url
          : placeholderImage(title, { subtitle: "Rahimafrooz News" }),
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/news/:id",
    handler: (req) => {
      const existing = db.get("news", req.params.id);
      if (!existing) return respond(404, { message: "News not found" });
      const patch = {
        title: req.body?.title || existing.title,
        description: req.body?.description ?? existing.description,
        image_url: validImg(req.body?.image_url) ? req.body.image_url : existing.image_url,
      };
      return respond(200, db.update("news", existing.id, patch));
    },
  },
  {
    method: "DELETE",
    path: "/news/:id",
    handler: (req) => {
      db.remove("news", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Banner Images ---
  { method: "GET", path: "/banner-images", handler: () => db.all("banner_images") },
  {
    method: "POST",
    path: "/banner-images",
    handler: (req) => {
      const pageName = req.body?.page_name || "home";
      const imgs = validImgArray(req.body?.img_url);
      const rec = db.insert("banner_images", {
        page_name: pageName,
        img_url: imgs.length ? imgs : [bannerImage(pageName.toUpperCase())],
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/banner-images/:id",
    handler: (req) => {
      const existing = db.get("banner_images", req.params.id);
      if (!existing) return respond(404, { message: "Banner not found" });
      const imgs = validImgArray(req.body?.img_url);
      return respond(
        200,
        db.update("banner_images", existing.id, {
          page_name: req.body?.page_name || existing.page_name,
          img_url: imgs.length ? imgs : existing.img_url,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/banner-images/:id",
    handler: (req) => {
      db.remove("banner_images", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Brands ---
  { method: "GET", path: "/brands", handler: () => db.all("brands") },
  {
    method: "POST",
    path: "/brands",
    handler: (req) => {
      const name = req.body?.brand_name || "NEW BRAND";
      const rec = db.insert("brands", {
        brand_name: name,
        image_url: validImg(req.body?.image_url)
          ? req.body.image_url
          : batteryImage(name, { brand: "RAHIMAFROOZ" }),
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/brands/:id",
    handler: (req) => {
      const existing = db.get("brands", req.params.id);
      if (!existing) return respond(404, { message: "Brand not found" });
      return respond(
        200,
        db.update("brands", existing.id, {
          brand_name: req.body?.brand_name || existing.brand_name,
          image_url: validImg(req.body?.image_url) ? req.body.image_url : existing.image_url,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/brands/:id",
    handler: (req) => {
      db.remove("brands", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Certificates ---
  { method: "GET", path: "/certificates", handler: () => db.all("certificates") },
  {
    method: "POST",
    path: "/certificates",
    handler: (req) => {
      const title = req.body?.title || "Quality Certificate";
      const rec = db.insert("certificates", {
        title,
        img_url: validImg(req.body?.img_url) ? req.body.img_url : certificateImage(title),
        created_at: new Date().toISOString().slice(0, 10),
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/certificates/:id",
    handler: (req) => {
      const existing = db.get("certificates", req.params.id);
      if (!existing) return respond(404, { message: "Certificate not found" });
      return respond(
        200,
        db.update("certificates", existing.id, {
          title: req.body?.title || existing.title,
          img_url: validImg(req.body?.img_url) ? req.body.img_url : existing.img_url,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/certificates/:id",
    handler: (req) => {
      db.remove("certificates", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Reviews ---
  { method: "GET", path: "/reviews", handler: () => db.all("reviews") },
  {
    method: "POST",
    path: "/reviews",
    handler: (req) => {
      const rec = db.insert("reviews", {
        user_name: req.body?.user_name || "Customer",
        review: req.body?.review || "",
      });
      return respond(201, rec);
    },
  },
  {
    method: "DELETE",
    path: "/reviews/:id",
    handler: (req) => {
      db.remove("reviews", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Achievements & Award Images ---
  { method: "GET", path: "/achievements", handler: () => db.all("achievements") },
  {
    method: "POST",
    path: "/achievements",
    handler: (req) => {
      const isAwardImg = req.body?.caption !== undefined && req.body?.description === undefined;
      const label = isAwardImg ? req.body.caption : "Achievement";
      const rec = db.insert("achievements", {
        caption: isAwardImg ? req.body.caption : null,
        description: isAwardImg ? null : req.body?.description || "",
        img_url: validImg(req.body?.img_url)
          ? req.body.img_url
          : isAwardImg
            ? certificateImage(label)
            : placeholderImage(label, { subtitle: "Rahimafrooz Achievement" }),
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/achievements/:id",
    handler: (req) => {
      const existing = db.get("achievements", req.params.id);
      if (!existing) return respond(404, { message: "Achievement not found" });
      const patch = {
        img_url: validImg(req.body?.img_url) ? req.body.img_url : existing.img_url,
      };
      if (req.body?.caption !== undefined) patch.caption = req.body.caption;
      if (req.body?.description !== undefined) patch.description = req.body.description;
      return respond(200, db.update("achievements", existing.id, patch));
    },
  },
  {
    method: "DELETE",
    path: "/achievements/:id",
    handler: (req) => {
      db.remove("achievements", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- FAQs ---
  { method: "GET", path: "/faqs", handler: () => db.all("faqs") },
  {
    method: "POST",
    path: "/faqs",
    handler: (req) => {
      const rec = db.insert("faqs", {
        question: req.body?.question || "",
        answer: req.body?.answer || "",
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/faqs/:id",
    handler: (req) => {
      const existing = db.get("faqs", req.params.id);
      if (!existing) return respond(404, { message: "FAQ not found" });
      return respond(
        200,
        db.update("faqs", existing.id, {
          question: req.body?.question ?? existing.question,
          answer: req.body?.answer ?? existing.answer,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/faqs/:id",
    handler: (req) => {
      db.remove("faqs", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },

  // --- Maintenance Instructions ---
  { method: "GET", path: "/instructions", handler: () => db.all("instructions") },
  {
    method: "POST",
    path: "/instructions",
    handler: (req) => {
      const rec = db.insert("instructions", {
        title: req.body?.title || "",
        description: req.body?.description || "",
      });
      return respond(201, rec);
    },
  },
  {
    method: "PATCH",
    path: "/instructions/:id",
    handler: (req) => {
      const existing = db.get("instructions", req.params.id);
      if (!existing) return respond(404, { message: "Instruction not found" });
      return respond(
        200,
        db.update("instructions", existing.id, {
          title: req.body?.title ?? existing.title,
          description: req.body?.description ?? existing.description,
        })
      );
    },
  },
  {
    method: "DELETE",
    path: "/instructions/:id",
    handler: (req) => {
      db.remove("instructions", req.params.id);
      return respond(200, { message: "Deleted" });
    },
  },
]);
